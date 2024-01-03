import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

//const board = Array(9).fill(null)
const board = ["x","x","x","x","x","x","x","x","x"]

function Square({children, index}) {
  return (
    <span className='square'>
        {children}
    </span>
    
  )
}

  return (
    <>
      <h1>TiC TAC TOE</h1>
      <section className='board'>
        {
          board.map((_, index) => {
             return (
             <Square 
             index={index}

             >
              {index}
              </Square>
             )
          })
        }
      </section>

    </>
  )
}

export default App
