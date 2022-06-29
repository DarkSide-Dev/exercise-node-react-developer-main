import { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
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
} from './styles/Details';

export const DETAILS = () => {
  const params = useParams();
  const [details, setDetails] = useState<Commit>();
  const [date, setDate] = useState<Date>();

  useEffect(() => {
    const loadRepo = async () => {
      await fetch(`http://localhost:4000/repos/${params.repo}`)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setDetails(json[0]);
          details && setDate(new Date(details.commit.author.date));
        })
        .catch((error) => {
          //   loadRepo();
        });
    };

    loadRepo();
  }, [params.repo, details]);

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

        {(!details || !date) && <TailSpin color="#1d7d97" width="100" />}
      </COMMIT>
    </CONTAINER>
  );
};
