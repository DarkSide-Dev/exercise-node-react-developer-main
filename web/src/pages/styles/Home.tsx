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

export const LIST = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  padding: 50px 0;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #879196;
  position: relative;
  margin-bottom: 30px;
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
  border: 0;
  border-radius: 10px;
  transition: all ease 0.3s;
  cursor: pointer;
  color: #e3e3e3;
  line-height: 20px;
  position: relative;

  &:hover {
    transform: scale(1.1);
    z-index: 2;
    &::after {
      content: 'Click on the language for filter';
      position: absolute;
      bottom: -30px;
      color: #e1e1e1;
      border-radius: 5px;
      background-color: #ef7e13;
      border: 2px solid #4a3b3b;
      padding: 0px 5px;
    }
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
  z-index: 9999;
`;

export const REPO_FORKS = styled.small`
  color: #ef7e13;
`;

export const REPO_FOOTER = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

export const FILTER_NAME = styled.small`
  position: absolute;
  right: 40px;
  top: 13px;
  background-color: #61dafb;
  width: fit-content;
  padding: 5px 10px;
  text-align: center;
  color: #555;
  border-radius: 5px;
  cursor: pointer;
`;
