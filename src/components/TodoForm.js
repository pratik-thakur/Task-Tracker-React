import React,{useState,useEffect,useRef} from 'react'

function TodoForm(props) {
    const[input,setInput]=useState('');

    const inputRef = useRef(null)
    useEffect(()=>{inputRef.current.focus()})

    const handleChange =e=>{
        setInput(e.target.value)
    }

    const handleSubmit = e =>{
        e.preventDefault();
        //console.log(e)
        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text:input
        })

        setInput('')
    }

    return (
        <div>
            <form className="todo-form" onSubmit={handleSubmit}>
                {props.edit?(<><input 
                type="text" 
                placeholder="Update your item"
                value={input}
                name='text'
                onChange={handleChange}
                className='todo-input edit'
                ref={inputRef}
                />
                <button className="todo-button edit">Update</button></>
                ):(<><input 
                    type="text" 
                    placeholder="Add a todo"
                    value={input}
                    name='text'
                    onChange={handleChange}
                    className='todo-input'
                    ref={inputRef}
                    />
                    <button className="todo-button">Add todo</button>
                    </>)}
                
            </form>
        </div>
    )
}

export default TodoForm
