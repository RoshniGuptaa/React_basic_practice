import React from 'react'
import Person from '../Person'

export default function NameList() {
    const names=["Roshni","Prem","Rahul","Raju"]

    const persons=[
        {
            id:1,
            name:"Roshni",
            age:20,
            skill:"React"
        },
        {
            id:2,
            name:"Prem",
            age:20,
            skill:"React"
        },
        {
            id:3,
            name:"Rahul",
            age:20,
            skill:"React"
        },
        {
            id:4,
            name:"Raju",
            age:20,
            skill:"React"
        }
    ]
    // rendring list using map function
    const nameList=names.map(n=><h2>{n}</h2>)

    const personList=persons.map(person=><Person key={person.id} person={person}/>)
      return (
    <div>
      {personList}
      
    </div>
  )
}
