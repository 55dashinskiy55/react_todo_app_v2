import React, {useState} from "react";
import ToDo from "./ToDo";
import ToDoForm from "./ToDoForm";
import {v4 as uuid4} from 'uuid'
import ToDoFormEdit from "./ToDoFormEdit";
uuid4();

const ToDoApp = () => {

    const [toDos, setToDos] = useState([])

    const addToDo = (toDo) => {
        setToDos([...toDos, {id: uuid4(), task:toDo, isCompleted: false, isEditing: false}])
    }

    const toggleDone = (id) => setToDos(toDos.map(toDo => toDo.id === id ? {...toDo, isCompleted: !toDo.isCompleted}: toDo))
    
    const removeToDo = (id) => setToDos(toDos.filter(toDo => toDo.id !== id))

    const editToDo = (id) => setToDos(toDos.map(toDo => toDo.id === id ? {...toDo, isEditing: !toDo.isEditing}: toDo))
    
    const editTask = (task, id) => setToDos(toDos.map(toDo => toDo.id === id ? {...toDo, task, isEditing: !toDo.isEditing} : toDo))

    return (
        <div className="todo__app"> 
        <ToDoForm addToDo={addToDo}/>
        {toDos.map((toDo, index) => toDo.isEditing? (<ToDoFormEdit editToDo={editTask} task={toDo} key={index}/>) : (<ToDo task={toDo} key={index} toggleDone={toggleDone} removeToDo={removeToDo} editToDo={editToDo}/>))} 
        </div>
    )
}

export default ToDoApp