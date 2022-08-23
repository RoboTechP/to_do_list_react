import React, { useState } from 'react'

const Task = () => {

    const [tasks, setTasks] = useState ([
        {
          id: 1,
          text: 'Doctors Appointment',
          day: '4th Feb 2022',
          Country: 'Mexico',
          reminder: false,
        } , 
        {
            id: 2,
            text: 'Doctors Appointment',
            day: '4th Feb 2022',
            Country: 'Mexico',
            reminder: false,
          } , 
         ])


  return (
    <>
    {tasks.map((task) => (<h3 key={task.id}> {task.text }  {task.day} </h3> ))}
  
  </>
  )
}

export default Task


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