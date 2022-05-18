import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  background-color: white;
  position: relative;
  overflow: hidden;
  width: 40vw;
  height: 80vh;
  margin: 0 auto;

  margin-top: 10vh;
  margin-bottom: 10vh;
  display: flex;
  flex-direction: column;

  border-radius: 16px;
`;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;
