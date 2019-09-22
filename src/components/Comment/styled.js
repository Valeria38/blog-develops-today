import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 540px;
  margin: 0 auto;
`;

export const CommentText = styled.section`
  width: 100%;
  margin: 20px auto;
  border: 1px solid #dcdcdc;
  color: #333;
  border-radius: 5px;
  padding: 20px 10px;
  box-sizing: border-box;
`;

export const Span = styled.span`
  position: absolute;
  top: -10px;
  left: 10px;
  color: green;
  font-size: 16px;
  font-weight: 600;
  background: #fff;
`;
