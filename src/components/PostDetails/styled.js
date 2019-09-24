import styled from 'styled-components';

export const ArrowBack = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 160px;
  height: 40px;
  line-height: 40px;
  background: #555;
  color: #fff;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

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

export const TextArea = styled.textarea`
  width: 60%;
  height: 80px;
  resize: none;
  margin: 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding-left: 10px;
  padding-top: 10px;
  &:focus {
    border: 1px solid #7b68ee;
    border-radius: 5px;
    outline: none;
  }
`;

export const Input = styled.input`
  width: 60%;
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
  margin: 10px 0;
  height: 30px;
  width: 100px;
  background: #7b68ee;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Error = styled.p`
  text-align: center;
  color: tomato;
  font-size: 20px;
  font-weight: 500;
`;

export const CommentContainer = styled.section`
  margin: 0px auto;
  padding-top: 20px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #555;
`;

export const Label = styled.label`
  font-size: 18px;
  text-align: center;
  display: block;
`;

export const Line = styled.hr`
  width: 80%;
  background-color: #666;
  height: 2px;
  margin: 0 auto 20px;
`;
