import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #eee;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>Hello!! There!!!</TodoTemplate>
    </>
  );
};

export default App;
