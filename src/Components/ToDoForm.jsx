import React, {useState} from "react";

const ToDoForm = ({addToDo}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        addToDo(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="What you will be do today?" onChange={event => setValue(event.target.value)}/>
            <button type="submit">Add Task</button>
        </form>
    )
}

export default ToDoForm