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
  color: #454545;
  font-size: 1.5em;
  color: #444;
  font-weight: 300;
`;

export const LIST = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  padding: 20px 0;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #879196;
`;

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

export const REPO_DESC = styled.p``;

export const REPO_LANGUAGE = styled.small`
  color: #61dafb;
`;

export const REPO_FORKS = styled.small``;

export const REPO_FOOTER = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;
