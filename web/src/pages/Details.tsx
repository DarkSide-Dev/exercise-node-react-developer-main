import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { Commit } from '../models/Commit';
import * as D from './styles/Details';

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
    <D.CONTAINER>
      <D.TITLE>Repository: {params.repo}</D.TITLE>
      <D.COMMIT>
        {details && date && (
          <>
            <D.COMMIT_AREA>
              <D.USER_LINK href={details.author.url}>
                <D.USER_IMG src={details.author.avatar_url} />
              </D.USER_LINK>
              <D.USER_NAME href={details.author.url}>
                {details.author.login}
              </D.USER_NAME>
            </D.COMMIT_AREA>
            <D.COMMIT_AREA>
              <D.COMMIT_DATE>
                Date: {date.getMonth() + 1}/{date.getDate()}/
                {date.getFullYear()}
              </D.COMMIT_DATE>
              <D.COMMIT_TITLE>{details.commit.message}</D.COMMIT_TITLE>
            </D.COMMIT_AREA>
          </>
        )}

        {loading && <TailSpin color="#1d7d97" width="100" />}

        {errorLog}
      </D.COMMIT>
      <D.README_AREA>{readme}</D.README_AREA>
      <D.BACK_BUTTON onClick={() => handleRepo()}>
        Back to List page
      </D.BACK_BUTTON>
    </D.CONTAINER>
  );
};
