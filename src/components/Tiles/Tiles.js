import React, { useState } from 'react';
import { TileItem } from '../TileItem/TileItem';

export function Tiles() {
  const [tiles, setTiles] = useState({ val: []});

  function createTile() {
    return tiles.val.map((el, i) =>
      <div key={i}>
        <TileItem onDelete={removeClick.bind(i)} onChange={handleChange.bind(i)}/>
      </div>
    );
  }

  function handleChange(event) {
    let vals = [...tiles.val];
    vals[this] = event.target.value;
    setTiles({ val: vals });
  }

  const addClick = () => {
    setTiles({ val: [...tiles.val, '']})
  }

  const removeClick = () => {
    let vals = [...tiles.val];
    vals.splice(this,1);
    setTiles({ val: vals });
  }

  const handleSubmit = event => {
    alert('Tiles: ' + tiles.val.join(', '));
    event.preventDefault();
  }

  return (
  //   <form onSubmit={handleSubmit}>
    <div>
      {createTile()}
      <input type='button' value='add more' onClick={addClick} />
      <input type="submit" value="Submit" />
    </div>
  );
}
