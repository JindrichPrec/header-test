import React, { useEffect, useReducer } from 'react';

import { TileEditorItem } from './TileEditorItem';
import { Dropdown } from '../Dropdown/Dropdown';
import { MultiSwitch } from '../MultiSwitch/MultiSwitch';

function tilesReducer(state, action) {
  switch (action.type) {
    case 'SET_TILE_DATA': {
      const tiles = [...state.tiles];
      tiles[action.index] = action.data;
      return {
        ...state,
        tiles
      };
    }

    case 'DELETE_TILE': {
      const tiles = [...state.tiles];
      tiles.splice(action.index, 1);
      return {
        ...state,
        tiles
      };
    }

    case 'DUPLICATE_TILE': {
      const tiles = [...state.tiles];
      tiles.splice(action.index, 0, state.tiles[action.index]);
      return {
        ...state,
        tiles
      };
    }

    case 'SET_ANIMATION':
      return {
        ...state,
        animation: action.animation
      };

    case 'SET_SIZE':
      return {
        ...state,
        size: action.size
      };

    case 'ADD_TILE':
      return {
        ...state,
        tiles: state.tiles.concat({
          header: 'Some Header',
          subHeader: 'Some Sub Header Idk',
          isEnabled: true,
          background: {
            type: 'color',
            value: '#b000b5'
          },
          buttonText: '',
          buttonLink: '',
          buttonMode: 0
        })
      };

    default:
      return state;
  }
}

const sizes = [ 'S', 'M', 'L' ];
const animations = [ 'Fortune Wheel', 'Fade Out' ];
const colors = ['#ffffff', '#60cefe', '#49e5a5', '#000000', '#808080', '#dadada', '#f5f5f5'];
const images = [];

export function TileEditor() {
  const [ state, dispatch ] = useReducer(tilesReducer, {
    animation: 0,
    size: 0,
    tiles: []
  });

  const setAnimation = animation => dispatch({
    type: 'SET_ANIMATION',
    animation
  });

  const setSize = size => dispatch({
    type: 'SET_SIZE',
    size
  });

  const addTile = () => dispatch({ type: 'ADD_TILE' });
  useEffect(addTile, []);
  return (
    <div className="tile-editor">
      <h2>Header Settings</h2>
      <h3>Size</h3>
      <MultiSwitch options={sizes} selectedIndex={state.animation} onChange={setAnimation} />
      <h3>Animation</h3>
      <Dropdown items={animations} selectedIndex={state.size} onChange={setSize} />
      <h3>Tiles</h3>
      <button type="button" onClick={addTile}>
        Add Tile
      </button>
      {state.tiles.map((data, index) =>
        <div key={index}>
          <TileEditorItem
            colors={colors}
            images={images}
            data={data}
            onChange={data => dispatch({ type: 'SET_TILE_DATA', index, data })}
            onDuplicate={() => dispatch({ type: 'DUPLICATE_TILE', index })}
            onDelete={() => dispatch({ type: 'DELETE_TILE', index })} />
        </div>
      )}
      <button type="button" onClick={() => console.log(state)}>
        Submit
      </button>
    </div>
  );
}
