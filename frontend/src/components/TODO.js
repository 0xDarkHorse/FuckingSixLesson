import React from 'react'

const TODOItem = ({item}) => {
    return (
        <tr>
            <td>{item.project}</td>
            <td>{item.text}</td>
            <td>{item.author}</td>
        </tr>
    )
}

const TODOList = ({items}) => {
   return (
       <table>
           <th>
               Проект
           </th>
           <th>
               Текст
           </th>
           <th>
               Author
           </th>
           {items.map((item) => <TODOItem item={item} />)}
       </table>
   )
}

export default TODOList