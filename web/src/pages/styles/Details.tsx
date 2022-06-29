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
  flex-wrap: wrap;
`;

export const USER_NAME = styled.a`
  text-decoration: none;
  color: #e2e2e2;
`;

export const COMMIT_DATE = styled.p``;

export const COMMIT_TITLE = styled.p`
  width: 500px;
  text-align: center;
`;

export const README_AREA = styled.span`
  white-space: pre-line;
  margin-top: 40px;
  background-color: #444;
  width: 1000px;
  max-width: 95%;
  min-width: 320px;
  box-sizing: border-box;
  padding: 20px 70px;
  border-radius: 10px;
  color: #e2e2e2;
`;

export const BACK_BUTTON = styled.button`
  width: 280px;
  margin: 20px 0;
  padding: 20px;
  font-size: 25px;
  background-color: #04aa6d;
  border-radius: 5px;
  border: none;
  color: #fff;
  text-align: center;
  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #059862;
  }
`;
