import React, { useState } from 'react'
import Task from './Task'

const Tasks = ({tasks, onDelete, OnToggle}) => {
   
  return (
    <>
    {tasks.map((task) => (<Task key={task.id} task={task} onDelete={onDelete} OnToggle={OnToggle}/> ))}

  </>
  )
}

export default Tasks


// {/* <table className='data_table'>
// <tr>
// {tableheader.map((tablehead)=>(

// <th key={tablehead.id}> {tablehead.Company} </th>

// ))} 
// </tr>  

// {tasks.map((task)=>(

// <tr> 
// <td key={task.id}>  {task.Company}  </td>
// <td key={task.id}>  {task.Contact}  </td>
// <td key={task.id}>  {task.Country}  </td>
// </tr>

// ))} 


// </table>
// {
//     id: 2,
//     Company: 'Amir',
//     Contact: 'Contact',
//     Country: 'Mexico',
//     reminder: false,
//   } , 
//  ])
// const [tableheader, setHeader]= useState([
// {id: 3, Header: 'Company'},
// {id: 4, Header: 'Contact'},
// {id: 5, Header: 'Country'}, */}