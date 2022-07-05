import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { Repo } from '../models/Repo';
import * as H from './styles/Home';

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
    <H.CONTAINER>
      <H.TITLE>Repositories List</H.TITLE>
      <H.LIST>
        {filter !== true && (
          <H.FILTER_NAME onClick={(event) => handleFilter(event, true)}>
            {filter} &#10006;
          </H.FILTER_NAME>
        )}
        {repo &&
          repo.map((item, index) => {
            if (item.language === filter || filter === true) {
              return (
                <H.REPO_ITEM key={index} onClick={() => handleRepo(item.name)}>
                  <H.REPO_TITLE>{item.name || '- - -'}</H.REPO_TITLE>

                  <H.REPO_DESC>{item.description || '- - -'}</H.REPO_DESC>

                  <H.REPO_FOOTER>
                    <H.REPO_LANGUAGE
                      onClick={(event) => handleFilter(event, item.language)}
                    >
                      {item.language || '- - -'}
                    </H.REPO_LANGUAGE>

                    <H.REPO_FORKS>
                      Forks: {item.forks_count || '-'}
                    </H.REPO_FORKS>
                  </H.REPO_FOOTER>
                </H.REPO_ITEM>
              );
            }
            return false;
          })}
        {!repo && <TailSpin color="#1d7d97" width="100" />}
      </H.LIST>
    </H.CONTAINER>
  );
};
