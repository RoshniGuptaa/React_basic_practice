import React from 'react'

export default function Person({person}) {
  return (
    <div>
      <h2>I am {person.name} . My age is {person.age}. I have mastery in {person.skill}</h2>
    </div>
  )
}
