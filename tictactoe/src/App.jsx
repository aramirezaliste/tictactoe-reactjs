import { useState } from 'react'
import './App.css'

const TURNS = {
    X : "x",
    O : "o"
}

const winPositions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function Square({ children, changeBoard, isSelected, index }) {

    function clickSquare(){
        changeBoard(index)
    }

    const styling =  `square ${isSelected ? 'turn' : '' } `

    return (
        <div className={styling} onClick={clickSquare}>
            {children}
        </div>
    )
}

function App() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.X)
    //null perdedor, false empate
    const [winner, setWinner] = useState(null)

    function isWinner(newBoard){
        winPositions.forEach((positions) => {
            const [a, b ,c] = positions
            if(
                newBoard[a] == newBoard[b] &&
                newBoard[b] == newBoard[c]
            ){
                setWinner(newBoard[a])
            }
        } )
        
    }

    function changeBoard(index) {
        //Verificar si ya tiene una marca el tablero
        if (board[index] || winner) return

        //Modificando el tablero con una nueva marca
        const newBoard = [...board]
        newBoard[index] = turn // x , o
        setBoard(newBoard)

        //Cambiado el turno
        setTurn(turn == TURNS.X ? TURNS.O : TURNS.X)

        //Verificando si hay ganador
        isWinner(newBoard)
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
            <section className='turns'>
                <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
            </section>

        </>
    )
}

export default App
