// Write your Character component here
import React from 'react';
import styled from 'styled-components';

export default function Character(props) {
  const CharacterStyled = styled.div`
    color: black;
    background-color: rgba(252, 254, 198, .5);
    width: 20rem;
    margin: .5rem auto;
    padding: .5rem;
    border-radius: 4rem;
    :hover {
      background-color: rgba(252, 254, 198, .7);
    }
  `;
  return (
    <CharacterStyled>
      <h2>{props.char.name}</h2>
    </CharacterStyled>
  )
}