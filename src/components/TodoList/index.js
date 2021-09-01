import React from "react"
import "./todoList.css"

function TodoList(props) {
    return (
        <section>
            <ul>
                {props.childen}
            </ul>
        </section>
    )
}

export { TodoList }