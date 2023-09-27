import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navbar, Main, Form } from './component'
import TodoList from './pages/todoList/TodoList';
function App() {

  const router = createBrowserRouter([
    {
      path: "/", element: <Navbar />, children: [
        { index: true, element: <Main /> },
        {
          path: "/habit",
          children: [
            {
              path: "form", element: <Form />
            },
            {
              path: "list", element: <TodoList />
            }

          ]
        }
      ]
    },

  ])


  return (
    <RouterProvider router={router} />
  );
}

export default App;
