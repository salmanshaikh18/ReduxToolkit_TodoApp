import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <>
      <h1 className='text-2xl sm:text-3xl'>Redux Toolkit</h1>
      {/* <AddTodo /> */}
      <Todos />
    </>
  )
}

export default App