import React from 'react'

export default function ItemsComponent({ todos, deleteTodo }) {

  return (
    <div style={{display: "flex", justifyContent:"center"}}>
      <ul style={{textAlign:"left"}}>
        {todos.map((item,index) => {
            return (
                <li key={index} style={{marginTop:"10px"}}>
                {item}
                <button style={{marginLeft: "15px"}}
                onClick={() => deleteTodo(item)}
                >
                    Remove Tasks
                </button>
            </li>
            );
        })}
      </ul>
    </div>
  );
}


