import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { Repo } from '../models/Repo';
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
  FILTER_NAME,
} from './styles/Home';

export const HOME = () => {
  const [repo, setRepo] = useState<Repo[]>();
  const [filter, setFilter] = useState<boolean | string>(true);
  const navigate = useNavigate();

  function dateSort(a: Repo, b: Repo): number {
    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
  }

  function handleRepo(name: string): void {
    navigate(`${name}/details`);
  }

  function handleFilter(event: React.MouseEvent, language: string | boolean) {
    event.preventDefault();
    event.stopPropagation();
    setFilter(language);
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

  return (
    <CONTAINER>
      <TITLE>Repositories List</TITLE>
      <LIST>
        {filter !== true && (
          <FILTER_NAME onClick={(event) => handleFilter(event, true)}>
            {filter} &#10006;
          </FILTER_NAME>
        )}
        {repo &&
          repo.map((item, index) => {
            if (item.language === filter || filter === true) {
              return (
                <REPO_ITEM key={index} onClick={() => handleRepo(item.name)}>
                  <REPO_TITLE>{item.name || '- - -'}</REPO_TITLE>

                  <REPO_DESC>{item.description || '- - -'}</REPO_DESC>

                  <REPO_FOOTER>
                    <REPO_LANGUAGE
                      onClick={(event) => handleFilter(event, item.language)}
                    >
                      {item.language || '- - -'}
                    </REPO_LANGUAGE>

                    <REPO_FORKS>Forks: {item.forks_count || '-'}</REPO_FORKS>
                  </REPO_FOOTER>
                </REPO_ITEM>
              );
            }
            return false;
          })}
        {!repo && <TailSpin color="#1d7d97" width="100" />}
      </LIST>
    </CONTAINER>
  );
};
