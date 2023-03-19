import React, {useState} from "react";

const ToDoFormEdit = ({editToDo, task}) => {

    const [value, setValue] = useState(task.task);

    const handleSubmit = (event) => {
        event.preventDefault();
        editToDo(value, task.id);
        setValue('');
    }

    return (
        <form className="todo__task-editor" onSubmit={handleSubmit}>
            <input className="todo__task-editor__input" type="text" value={value} placeholder="Change your task:" onChange={event => setValue(event.target.value)}/>
            <button className="todo__task-editor__button" type="submit">Change</button>
        </form>
    )
}

export default ToDoFormEdit