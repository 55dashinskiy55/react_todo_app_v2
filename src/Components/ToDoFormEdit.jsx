import React, {useState} from "react";

const ToDoFormEdit = ({editToDo, task}) => {

    const [value, setValue] = useState(task.task);

    const handleSubmit = (event) => {
        event.preventDefault();
        editToDo(value, task.id);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="Change your task:" onChange={event => setValue(event.target.value)}/>
            <button type="submit">Change</button>
        </form>
    )
}

export default ToDoFormEdit