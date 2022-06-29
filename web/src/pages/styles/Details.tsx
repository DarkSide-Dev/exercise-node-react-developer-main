import styled from 'styled-components';

export const CONTAINER = styled.main`
  font-family: 'Merriweather', serif;
  display: flex;
  flex-direction: column;
  background-color: #e2e2e2;
  align-items: center;
  min-height: 100vh;
`;

export const TITLE = styled.h1`
  font-size: 1.5em;
  color: #444;
  font-weight: 300;
`;

export const COMMIT = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #4a3b3b;
  justify-content: space-evenly;
  align-items: center;
  width: 1000px;
  max-width: 95%;
  min-width: 320px;
  box-sizing: border-box;
  padding: 20px 70px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #61dafb;
  color: #e2e2e2;
`;

export const USER_LINK = styled.a`
  text-decoration: none;
`;

export const USER_IMG = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 5px;
  border: 2px solid #61dafb;
`;

export const COMMIT_AREA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const USER_NAME = styled.a`
  text-decoration: none;
  color: #e2e2e2;
`;

export const COMMIT_DATE = styled.p``;

export const COMMIT_TITLE = styled.p``;

export const REPO_ITEM = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 0 0 15em;
  margin: 7px;
  background-color: #4a3b3b;
  padding: 0 7px;
  border: 0px solid #ccc;
  border-radius: 10px;
  transition: all ease 0.3s;
  cursor: pointer;
  color: #e3e3e3;
  line-height: 20px;

  &:hover {
    transform: scale(1.1);
  }
`;

export const REPO_TITLE = styled.h3`
  letter-spacing: 1.5px;
`;

export const REPO_DESC = styled.p`
  font-size: 1em;
`;

export const REPO_LANGUAGE = styled.small`
  color: #61dafb;
`;

export const REPO_FORKS = styled.small`
  color: #ef7e13;
`;

export const REPO_FOOTER = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;
