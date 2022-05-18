import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  background-color: white;
  position: relative;
  overflow: hidden;
  width: 93vw;
  height: calc(93vw * 0.5625);
  max-height: 80vh;
  max-width: calc(93vh * 1.78);
  margin: auto;

  margin-top: calc(7vw * 0.5625);
  margin-bottom: calc(7vw * 0.5625);

  display: flex;
  flex-direction: column;
`;

const TodoTemplate = ({ children }) => {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
};

export default TodoTemplate;
