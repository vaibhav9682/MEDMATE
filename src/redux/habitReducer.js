import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: Date.now(),
      task: "Riding",
      time: {
        hours: '05',
        min: 30,
        meridian: "am"
      },
      status: [{ date: '26', state: "Done" }],
      view: false


    },

  ]

};



export const habitSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // Add a new todo to the state
      state.todos.push(action.payload)
    },
    updatetodayStatus: (state, action) => {
      // to update status for today
      let todo = state.todos.find((todo) => todo.id === action.payload[0])


      let target = todo.status.find((t) => t.date === action.payload[2])
      if (target) {
        target.state = action.payload[1]
      } else {
        todo.status.push({
          date: action.payload[2],
          state: action.payload[1]
        })
      }
      // console.log(target)
    },
    deleteTodo: (state, action) => {
      // Delete a todo from the 

      state.todos = state.todos.filter((todo) => todo.id !== action.payload);

    },

    toggleStatus: (state, action) => {

      let todo = state.todos.find((todo) => todo.id === action.payload[0])
      let target = todo.status.find((t) => t.date == action.payload[1])
      if (target) {
        switch (target.state) {
          case "Done":
            target.state = "Not Done";
            break;
          case "Not Done":
            target.state = "None";
            break;
          case "None":
            target.state = "Done";
            break;
          default:
            break;
        }
      } else {
        todo.status.push({
          date: action.payload[1],
          state: "Done"
        })
      }


      console.log(todo.task)
    },
    toggleView: (state, action) => {
      let todo = state.todos.find((t) => t.id === action.payload)
      todo.view = !todo.view;
    }
  },

});

export const { addTodo, updatetodayStatus, deleteTodo, toggleView, toggleStatus } = habitSlice.actions;


export const todoSelector = (state) => state.habitReducer.todos;



export default habitSlice.reducer;
