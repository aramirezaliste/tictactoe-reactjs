import { useState } from 'react'
import './App.css'

const TURNS = {
    X : "x",
    O : "o"
}

function Square({ children, changeBoard, index }) {
    function clickSquare(){
        changeBoard(index)
    }

    return (
        <div className='square' onClick={clickSquare}>
            {children}
        </div>
    )
}

function App() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.X)

    function changeBoard(index) {

        //Modificando el tablero con una nueva marca
        const newBoard = [...board]
        newBoard[index] = turn // x , o
        setBoard(newBoard)

        //Cambiado el turno
        setTurn(turn == TURNS.X ? TURNS.O : TURNS.X)
    }

    return (
        <>
            <h1>TiC TAC TOE</h1>
            <section className='board'>
                {
                    board.map((elem, index) => {
                        return (
                            <Square
                                index={index}
                                key={index}
                                changeBoard={changeBoard}
                            >
                                {elem}
                            </Square>
                        )
                    })
                }
            </section>

        </>
    )
}

export default App
