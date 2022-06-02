import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const TodoList = () => {
  return (
    <TodoListBlock>
      <TodoItem text="컴포넌트 만들기" done={true} />
      <TodoItem text="컴포넌트 디자인하기" done={true} />
      <TodoItem text="props 수정" done={false} />
      <TodoItem text="기능 구현하기" done={false} />
    </TodoListBlock>
  );
};

export default TodoList;
