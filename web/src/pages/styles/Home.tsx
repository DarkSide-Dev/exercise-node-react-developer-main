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

export const LIST_AREA = styled.div`
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
