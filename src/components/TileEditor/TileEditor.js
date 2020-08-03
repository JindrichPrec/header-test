import React, { useEffect, useReducer } from 'react';

import { TileEditorItem } from './TileEditorItem';
import { Dropdown } from '../Dropdown/Dropdown';
import { MultiSwitch } from '../MultiSwitch/MultiSwitch';

import { ReactComponent as PlusIcon } from '../../assets/svg/plus-icon.svg';
import TestBgImage from '../../assets/images/main-bg.jpg';

import './TileEditor.sass';

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
const durations = [ 'Auto 2 sec', '3 sec' ];
const colors = ['#ffffff', '#60cefe', '#49e5a5', '#000000', '#808080', '#dadada', '#f5f5f5'];
const images = [<TestBgImage />];

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
      <div className="tile-editor__header">
        <h2 className="tile-editor__title">Header Settings</h2>
        <div className="tile-editor__column">
          <h3 className="tile-editor__label">Size</h3>
          <MultiSwitch options={sizes} selectedIndex={state.animation} onChange={setAnimation} />
          <div className="separator"></div>
        </div>
        <div className="tile-editor__column">
          <h3 className="tile-editor__label">Animation</h3>
          <Dropdown items={animations} selectedIndex={state.size} onChange={setSize} />
          <Dropdown items={durations} selectedIndex={state.size} onChange={setSize} disabled={true} />
        </div>
      </div>
        <div className="tile-editor__body">
        <div className="tile-editor__column">
          <h3 className="tile-editor__label">Tiles</h3>
        </div>
        <button className="tile-editor__add-button" type="button" onClick={addTile}>
          <PlusIcon />
          <span>Add Tile</span>
        </button>
        <div className="tile-editor__tiles-wrapper">
          <div className="tile-editor__subheader">
            <div className="tile-editor__column tile-editor__column--1"></div>
            <div className="tile-editor__column tile-editor__column--2">
              <span className="tile-editor__heading">Subheader</span>
            </div>
            <div className="tile-editor__column tile-editor__column--3">
              <span className="tile-editor__heading">Heading</span>
            </div>
            <div className="tile-editor__column tile-editor__column--4">
              <span className="tile-editor__heading">Positive</span>
            </div>
            <div className="tile-editor__column tile-editor__column--5">
              <span className="tile-editor__heading">Background</span>
            </div>
          </div>
        </div>
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
      </div>
        <div className="tile-editor__footer">
          <button className="tile-editor__button" type="button" onClick={() => {console.log(state); alert('Check console log!')}}>
            Save
          </button>
        </div>
    </div>
  );
}
