import React from "react"
import "./createTodoButton.css"

function CreateTodoButton({ setOpenModal }){

  const onClickButton = () => {
    setOpenModal(prevState => !prevState)
  }

    return (
        <button
          className="CreateTodoButton"
          onClick={onClickButton}
        >
          +
        </button>
    )
}

export { CreateTodoButton }