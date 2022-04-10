import React from 'react'

const ProjectItem = ({item}) => {
    return (
        <tr>
            <td>{item.pr}</td>
            <td>{item.fuck_name}</td>
            <td>{item.url_git}</td>
            <td>{item.authors}</td>
        </tr>
    )
}

const ProjectList = ({items}) => {
   return (
       <table>
           <th>
               ID
           </th>
           <th>
               Fuck Name
           </th>
           <th>
               URL git
           </th>
           <th>
               Authors
           </th>
           {items.map((item) => <ProjectItem item={item} />)}
       </table>
   )
}

export default ProjectList