import styled from 'styled-components';

export const Form = styled.form`
  margin: 30px auto;
  padding: 20px;
  width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #555;
`;

export const Label = styled.label`
  width: 60%;
  color: #333;
`;

export const Input = styled.input`
  width: 100%;
  height: 30px;
  line-height: 30px;
  margin: 10px 0;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding-left: 10px;
  &:focus {
    border: 1px solid #7b68ee;
    border-radius: 5px;
    outline: none;
  }
`;

export const Button = styled.button`
  margin: 20px 0;
  height: 30px;
  width: 90px;
  background: #7b68ee;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Section = styled.section`
  width: 700px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  color: #808080;
`;

export const Header = styled.h1`
  text-align: center;
  font-weight: 500;
`;

export const Text = styled.p`
  font-size: 22px;
  margin: 5px;
  text-align: center;
`;

export const Error = styled.p`
  text-align: center;
  color: tomato;
  font-size: 20px;
  font-weight: 500;
`;
