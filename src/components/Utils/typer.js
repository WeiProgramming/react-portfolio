import React, { useState, useEffect } from 'react'

let wordList = ['Passion', 'Reality', 'Creation']

const Typer = () => {
  // Get word length w/ current word
  const [currentWord, setCurrentWord] = useState(wordList[0])

  // appending word
  const [newWord, setNewWord] = useState('')

  useEffect(() => {
    let currWordIndex = 1

    setInterval(() => {
      if (currWordIndex < wordList.length) {
        setCurrentWord(wordList[currWordIndex])
        currWordIndex = currWordIndex + 1
      } else {
        currWordIndex = 0
      }
    }, 5000)
  }, [])

  useEffect(() => {
    let wordIndex = 0
    setNewWord('')
    let createWord = setInterval(() => {
      if (wordIndex < currentWord.length) {
        makeWord(wordIndex)
        wordIndex = wordIndex + 1
      } else {
        clearInterval(createWord)
      }
    }, 200)
  }, [currentWord])

  const makeWord = (i) => {
    setNewWord((prev) => {
      return prev + currentWord[i]
    })
  }

  return <span>{newWord}</span>
}

export default Typer
