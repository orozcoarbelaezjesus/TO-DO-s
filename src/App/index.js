import React from "react"
import ReactDOM from "react-dom"
import { AppUI } from "./AppUI"
import { TodoProvider } from "../components/TodoContext";
import { Modal } from "../components/Modal";

/*const defaultTodos = [
  { text: "Cortar cebolla", complete: false },
  { text: "Tomar el curso de intro", complete: false },
  { text: "Realizar examen del curso de react", complete: false }
]*/

function App({ }) {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  )
}

ReactDOM.createPortal((
  <Modal />,
  document.getElementById("modal")
))

export default App;