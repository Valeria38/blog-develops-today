import styled from 'styled-components';

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
