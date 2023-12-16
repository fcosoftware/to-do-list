//import { Fragment } from 'react'

import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Container, ToDoList, Input, Button, ListItem, Check, Trash } from './styles.js'

function App() {
  const [list, setList] = useState([])
  const [inputTask, setInputTask] = useState('')

  //console.log(list)
  //"Comprar abacate", "Terminar as aulas de React"
  function inputMudou(event) {
    //setList([{id: uuidv4(), task: event.target.value}]) //um array
    setInputTask(event.target.value)
  }

  function cliqueiNoBotao() {
    if (inputTask) {
      setList([...list, { id: uuidv4(), task: inputTask, finished: false }])  // ... spread operator
    } else {
      alert('Informe uma tarefa por gentileza!!!')
    }
  }

  function finalizarTarefa(id) {
    const newList = list.map(item => (
      item.id == id ? { ...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deletarItem(id) {
    const newList = list.filter((item) => item.id != id)

    setList(newList)
  }

  return (
    // Fragment <></>
    //<Fragment></Fragment>
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="Informe uma atividade!!" />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={() => finalizarTarefa(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deletarItem(item.id)} />
                </ListItem>
              ))
            ) : (
              <h3>Não há item na lista</h3>
            )
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
