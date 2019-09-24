import styled from 'styled-components';

export const Section = styled.section`
  margin: 50px auto;
  padding: 20px;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #555;
  border: 1px solid #555;
  box-sizing: border-box;
`;

export const Header = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin: 5px;
`;

export const Text = styled.p`
  font-size: 18px;
  text-align: center;
`;

export const Error = styled.p`
  text-align: center;
  color: tomato;
  font-size: 20px;
  font-weight: 500;
`;

export const Line = styled.hr`
  width: 80%;
  background-color: #666;
  height: 2px;
  margin: 0 auto 20px;
`;
