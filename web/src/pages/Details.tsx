import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { Commit } from '../models/Commit';
import {
  COMMIT,
  COMMIT_DATE,
  COMMIT_AREA,
  COMMIT_TITLE,
  CONTAINER,
  TITLE,
  USER_IMG,
  USER_NAME,
  USER_LINK,
  README_AREA,
  BACK_BUTTON,
} from './styles/Details';

export const DETAILS = () => {
  const params = useParams();
  const [details, setDetails] = useState<Commit>();
  const [details2, setDetails2] = useState<Commit>();
  const [errorLog, setErrorLog] = useState('');
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = useState(1);
  const [date, setDate] = useState<Date>();
  const [readme, setReadme] = useState<string>('Searching readme...');
  const navigate = useNavigate();

  useEffect(() => {
    setDetails(details2);
    details2 && setDate(new Date(details2.commit.author.date));
    details2 && setLoading(false);
    !details2 &&
      setErrorLog(
        'Repository still not found, please verify if the name is correct and try again :)'
      );
    details2 && setErrorLog('');
  }, [details2]);

  function handleRepo(): void {
    navigate(`/`);
  }

  const loadRepo = async () => {
    await fetch(`http://localhost:4000/repos/${params.repo}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        if (json[0]) {
          setDetails2(json[0]);
        } else {
          loadRepo();
        }
      })
      .catch(() => {
        loadRepo();
      });
    console.log('rodando');
  };

  const loadReadme = async () => {
    await fetch(`http://localhost:4000/repos/${params.repo}/readme`)
      .then((response) => response.json())
      .then((response) => {
        if (response.data) {
          setReadme(response.data);
        } else {
          response.message && setReadme(response.message);
        }
      })
      .catch((err) => console.error(err));
  };

  if (loading1 === 1) {
    loadRepo();
    loadReadme();
    setLoading1(2);
  }

  return (
    <CONTAINER>
      <TITLE>Repository: {params.repo}</TITLE>
      <COMMIT>
        {details && date && (
          <>
            <COMMIT_AREA>
              <USER_LINK href={details.author.url}>
                <USER_IMG src={details.author.avatar_url} />
              </USER_LINK>
              <USER_NAME href={details.author.url}>
                {details.author.login}
              </USER_NAME>
            </COMMIT_AREA>
            <COMMIT_AREA>
              <COMMIT_DATE>
                Date: {date.getMonth() + 1}/{date.getDate()}/
                {date.getFullYear()}
              </COMMIT_DATE>
              <COMMIT_TITLE>{details.commit.message}</COMMIT_TITLE>
            </COMMIT_AREA>
          </>
        )}

        {loading && <TailSpin color="#1d7d97" width="100" />}

        {errorLog}
      </COMMIT>
      <README_AREA>{readme}</README_AREA>
      <BACK_BUTTON onClick={() => handleRepo()}>Back to List page</BACK_BUTTON>
    </CONTAINER>
  );
};
