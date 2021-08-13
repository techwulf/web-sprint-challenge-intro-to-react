// Write your Character component here
import React from 'react';

export default function Character(props) {
  return (
    <div>
      <h2>{props.char.name}</h2>
    </div>
  )
}