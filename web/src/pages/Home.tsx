import React, { useCallback, useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Repo } from '../models/Repo';
import { LIST } from './components/Home';
import * as H from './styles/Home';

export const HOME = () => {
  const [repo, setRepo] = useState<Repo[]>();
  const [filter, setFilter] = useState<boolean | string>(true);

  function dateSort(a: Repo, b: Repo): number {
    return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
  }

  const handleFilter = useCallback(
    (event: React.MouseEvent, language: string | boolean): void => {
      event.preventDefault();
      event.stopPropagation();
      setFilter(language);
    },
    []
  );

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
      <H.LIST_AREA>
        {filter !== true && (
          <H.FILTER_NAME onClick={(event) => handleFilter(event, true)}>
            {filter} &#10006;
          </H.FILTER_NAME>
        )}
        {repo && (
          <LIST
            repoList={repo}
            handleFilter={handleFilter}
            toggleFilterValue={setFilter}
            filter={filter}
          />
        )}
        {!repo && <TailSpin color="#1d7d97" width="100" />}
      </H.LIST_AREA>
    </H.CONTAINER>
  );
};
