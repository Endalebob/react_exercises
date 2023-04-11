import React, { useRef } from 'react'
import { Todo } from '../model'
import './styles.css'

type props = {
    todo:string,
    settodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd:(e: React.FormEvent<EventTarget>)=>void;
}

const InputField = ({todo,settodo,handleAdd}:props) => {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className='input' onSubmit={(e)=> {handleAdd(e)
    inputRef.current?.blur()}}>
        <input ref={inputRef} type='input' placeholder='Enter a task' className='input__box'
        value={todo} onChange = {
            (e)=> settodo(e.target.value)
        } />
        <button className='input_submit' type='submit'>go</button>
    </form>
  )
}

export default InputField