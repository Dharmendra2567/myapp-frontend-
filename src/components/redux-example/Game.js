import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Game = () => {
    const gameStore = useSelector(store => store.game)
    const game = gameStore.game
    const player=gameStore.player
   
    const dispatch = useDispatch()
    const [gamename, setGamename] = useState('')
    const [playername, setPlayer] = useState('')

    return (
        <>
            Game:{game}
            <input type={'text'} onChange={(e) => {
                return setGamename(e.target.value)
            }} />
            <button
                onClick={() => {
                    dispatch({
                        type: "UPDATE_GAME",
                        payload: gamename
                    })
                }}>Update Game</button>
                <br/>
                Player:{player}
                <input type={'text'} onChange={e=>setPlayer(e.target.value)}/>
                <button onClick={() =>dispatch({type:'UPDATE_PLAYER',payload:playername})}>update player</button>
        </>
    )
}

export default Game