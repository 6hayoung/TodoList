import React, { useState } from 'react';

const TodoList = () => {
    const [plan, setPlan] = useState('');
    const [list, setList] = useState([]);

    const onChange = (e) => {
        setPlan(e.target.value)
    };
    const onClick = (e) => {
        e.preventDefault();
        let confirmPlan = window.confirm('추가 하시겠습니까?');
        if(confirmPlan){
            //yes
            setList([...list,plan])
            setPlan('');
        }else{
            //no
        }

    }
    return(
        <div className="todo-content">
            <div className="todo-list">
                <ul>
                    {list.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </div>
            <div className='input-text'>
                <input type="text" name="plan" value={plan} onChange={onChange} placeholder="할 일"/>
                <button onClick={onClick}>입력</button>
            </div>
        </div>
        
    )
}

export default TodoList;