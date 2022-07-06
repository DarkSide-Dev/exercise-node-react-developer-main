import { useNavigate } from 'react-router-dom';
import { Repo } from '../../models/Repo';
import * as H from '../styles/components/Home';

interface Props {
  repoList: Repo[];
  filter: string | boolean;
  toggleFilterValue: (filter: string) => void;
  handleFilter: (event: React.MouseEvent, language: string | boolean) => void;
}

export const LIST: React.FC<Props> = ({
  repoList,
  toggleFilterValue,
  filter,
  handleFilter,
}) => {
  const navigate = useNavigate();

  function navigateRepo(name: string): void {
    navigate(`${name}/details`);
  }

  return (
    <>
      {repoList.map((item, index) => {
        if (item.language === filter || filter === true) {
          return (
            <H.REPO_ITEM key={index} onClick={() => navigateRepo(item.name)}>
              <H.REPO_TITLE>{item.name || '- - -'}</H.REPO_TITLE>

              <H.REPO_DESC>{item.description || '- - -'}</H.REPO_DESC>

              <H.REPO_FOOTER>
                <H.REPO_LANGUAGE
                  onClick={(event) => handleFilter(event, item.language)}
                >
                  {item.language || '- - -'}
                </H.REPO_LANGUAGE>

                <H.REPO_FORKS>Forks: {item.forks_count || '-'}</H.REPO_FORKS>
              </H.REPO_FOOTER>
            </H.REPO_ITEM>
          );
        }
        return false;
      })}
    </>
  );
};
