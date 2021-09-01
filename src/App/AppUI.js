import React from 'react';
import { TodoContext } from '../components/TodoContext';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { Modal } from "../components/Modal"
import { TodoForm } from '../components/TodoForm';

function AppUI() {

  const { loading,
    error,
    searchedTodos,
    completedTodo,
    deleteTodo,
    openModal,
    setOpenModal } = React.useContext(TodoContext)

  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />

      return (<TodoList>
        {error && <p>Error...</p>}
        {loading && <p>Loading...</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO...</p>}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completedTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>)


      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )} 

      <CreateTodoButton setOpenModal={setOpenModal} />
    </React.Fragment>
  )
}

export { AppUI }