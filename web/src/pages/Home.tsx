import { useEffect, useState } from 'react';

export const HOME = () => {
  const [repo, setRepo] = useState();

  useEffect(() => {
    const loadRepo = async () => {
      await fetch('http://localhost:4000/repos')
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setRepo(json);
        })
        .catch((error) => {
          loadRepo();
        });
    };

    loadRepo();
  }, []);

  console.log(repo);

  return <div>oi</div>;
};
