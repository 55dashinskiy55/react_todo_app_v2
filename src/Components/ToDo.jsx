import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ToDo = ({task, toggleDone, removeToDo, editToDo}) => {
    return (
        <div className="todo">
            <div onClick={() => toggleDone(task.id)} className={`${task.isCompleted ? "task__text--done":"task__text"}`}>
            {task.task}
            </div>
            <div className="todo__buttons">
            <FontAwesomeIcon icon={faEdit} onClick={() => editToDo(task.id)}/>
            <FontAwesomeIcon icon={faTrashAlt} onClick={() => removeToDo(task.id)}/>
            </div>
        </div>
    )
}

export default ToDo