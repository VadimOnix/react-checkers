import React, { createContext, useContext } from 'react'
import { Game } from './engine/core'


// const game = new Game()
const GameContext = createContext()

export default function GameProvider({ children }) {
  // const changeCell = (i,j,value) => {
  //   game.changeValue(i,j,value)
  // }

  return (
    <GameContext.Provider value = {new Game()}>
      {children}
    </GameContext.Provider>
  )
}

export const useGame = () => useContext(GameContext)
