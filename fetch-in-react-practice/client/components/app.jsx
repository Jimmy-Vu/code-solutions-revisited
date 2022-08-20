import React, { useEffect, useState } from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default function App(props) {
  const [state, setState] = useState({
    todos: []
  });

  useEffect(() => {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */
    fetch('/api/todos', { method: 'GET' })
      .then(res => res.json())
      .then(data => setState({ todos: data }))
      .catch(error => {
        console.error('Error:', error);
      })
  }, []);

  function addTodo(newTodo) {
    /**
    * Use fetch to send a POST request to `/api/todos`.
    * Then 😉, once the response JSON is received and parsed,
    * add the created todo to the state array.
    *
    * Do not mutate the original state array, nor any objects within it.
    * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
    *
    * TIP: Be sure to SERIALIZE the todo object in the body with JSON.stringify()
    * and specify the "Content-Type" header as "application/json"
    *
    * TIP: Use Array.prototype.concat to create a new array containing the contents
    * of the old array, plus the object returned by the server.
    */
    fetch('/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTodo)
    })
      .then(res => res.json())
      .then(data => {
        setState(prev => {
          return { todos: prev.todos.concat(data) }
        });
      })
      .catch(error => {
        console.error('Error:', error);
      })

  }

  function toggleCompleted(todoId) {
    /**
     * Find the index of the todo with the matching todoId in the state array.
     * Get its "isCompleted" status.
     * Make a new object containing the opposite "isCompleted" status.
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the response JSON is received and parsed,
     * replace the old todo in the state array.
     *
     * NOTE: "toggle" means to flip back and forth, so clicking a todo
     * in the list should "toggle" its isCompleted status back and forth.
     *
     * Do not mutate the original state array, nor any objects within it.
     * https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
     *
     * TIP: Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
    const target = state.todos.find(element => element.todoId === todoId);
    const index = state.todos.indexOf(target);
    let completedStatus = target.isCompleted;

    completedStatus
      ? completedStatus = false
      : completedStatus = true;

    const updatedTodo = { ...target, isCompleted: completedStatus };

    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTodo)
    })
      .then(res => res.json())
      .then(data => setState(prev => {
        const newTodosArray = prev.todos.slice();
        newTodosArray.splice(index, 1, data);
        return { todos: newTodosArray };
      }))
      .catch(error => console.error('Error:', error));
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col pt-5">
          <PageTitle text="Todo App" />
          <TodoForm onSubmit={addTodo} />
          <TodoList todos={state.todos} toggleCompleted={toggleCompleted} />
        </div>
      </div>
    </div>
  );
}
