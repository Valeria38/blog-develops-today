import styled from 'styled-components';

export const Section = styled.section`
  width: 90%;
  background: #f2f2f2;
  padding: 0 20px;
  margin: 20px 0 0;
  border-right: 3px solid #ddd;
  position: relative;
`;

export const Text = styled.p`
  color: #aaa;
`;

export const Title = styled.h2`
  color: #7b68ee;
  font-weight: 500;
  font-size: 20px;
`;
export const DeleteIcon = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  color: tomato;
  font-weight: 500;
  font-size: 18px;
  margin-left: 30px;
  &:hover {
    cursor: pointer;
    color: crimson;
  }
`;
