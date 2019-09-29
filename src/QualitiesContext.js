import React, { useState, createContext } from 'react'
import qualities from './data/qualities'

const Context = createContext([])

const QualitiesProvider = ({ children }) => {
  const [chosenQualities, setChoseQualities] = useState([])
  return (
    <Context.Provider
      value={{ chosenQualities, setChoseQualities, allQualities: qualities }}
    >
      {children}
    </Context.Provider>
  )
}

export default Context
export { QualitiesProvider }
