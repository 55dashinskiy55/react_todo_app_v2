import React, {useState} from "react";

const ToDoForm = ({addToDo}) => {

    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) return;
        addToDo(value);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit} className="todo__task-adder">
            <input  className="todo__task-adder__input" type="text" value={value} placeholder="What you will be do today?" onChange={event => setValue(event.target.value)}/>
            <button className="todo__task-adder__button" type="submit">Add Task</button>
        </form>
    )
}

export default ToDoForm