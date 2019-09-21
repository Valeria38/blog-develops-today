import styled from 'styled-components';

export const ArrowBack = styled.div`
  position: fixed;
  top: 20px;
  left: 20px;
  width: 140px;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  background: #808080;
  color: #fff;
  text-align: center;
  cursor: pointer;
`;

export const Section = styled.section`
  margin: 30px auto;
  padding: 20px;
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #dcdcdc;
  border-radius: 5px;
  color: #333;
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.3);
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
  width: 300px;
  height: 80px;
  resize: none;
  margin: 10px;
`;

export const Button = styled.button`
  margin: 20px 0;
  height: 30px;
  width: 100px;
  background: #7b68ee;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Comment = styled.section`
  width: 500px;
  margin: 20px auto;
  border: 1px solid #dcdcdc;
  color: #333;
  border-radius: 5px;
  padding: 20px 10px;
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.3);
`;
