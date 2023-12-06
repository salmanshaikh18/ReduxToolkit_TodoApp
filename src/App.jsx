import React from 'react'
import './App.css'
import Todo from './components/Todo'

const App = () => {
  return (
    <>
      <h1 className='text-2xl sm:text-3xl'>Redux Toolkit</h1>
      <Todo />
    </>
  )
}

export default App