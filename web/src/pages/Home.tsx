import { useEffect, useState } from 'react';
import { Repo } from '../models/Repo';
import { TailSpin } from 'react-loader-spinner';
import {
  CONTAINER,
  TITLE,
  REPO_ITEM,
  REPO_DESC,
  REPO_FORKS,
  REPO_LANGUAGE,
  REPO_TITLE,
  LIST,
  REPO_FOOTER,
} from './styles/Home';

export const HOME = () => {
  const [repo, setRepo] = useState<Repo[]>();

  function dateSort(a: Repo, b: Repo) {
    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
  }

  useEffect(() => {
    const loadRepo = async () => {
      await fetch('http://localhost:4000/repos')
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          json.sort(dateSort);
          setRepo(json);
        })
        .catch((error) => {
          loadRepo();
        });
    };

    loadRepo();
  }, []);

  console.log(repo);

  return (
    <CONTAINER>
      <TITLE>Repositories List</TITLE>
      <LIST>
        {repo &&
          repo.map((item, index) => {
            return (
              <REPO_ITEM key={index}>
                <REPO_TITLE>{item.name || '- - -'}</REPO_TITLE>

                <REPO_DESC>{item.description || '- - -'}</REPO_DESC>

                <REPO_FOOTER>
                  <REPO_LANGUAGE>{item.language || '- - -'}</REPO_LANGUAGE>

                  <REPO_FORKS>Forks: {item.forks_count || '-'}</REPO_FORKS>
                </REPO_FOOTER>
              </REPO_ITEM>
            );
          })}
        {!repo && <TailSpin color="#1d7d97" width="100" />}
      </LIST>
    </CONTAINER>
  );
};
