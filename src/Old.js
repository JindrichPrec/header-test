import React from 'react';
import './App.sass';
import { ReactComponent as DragIcon } from './assets/svg/drag-icon.svg';
import { ReactComponent as MoreIcon } from './assets/svg/more-icon.svg';
import { ReactComponent as DuplicateIcon } from './assets/svg/duplicate-icon.svg';
import { ReactComponent as PlusIcon } from './assets/svg/plus-icon.svg';
import { ReactComponent as DeleteIcon } from './assets/svg/trash-icon.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="modal">
          <div className="modal__header">
            <h2 className="modal__title">Header Settings</h2>
            <div className="d-inline-block">
              <label className="modal__label">Size</label>
              <div className="segment-control">
                <label>
                  <input type="radio" name="size" value="s" />
                  <span>S</span>
                </label>
                <label>
                  <input type="radio" name="size" value="m" />
                  <span>M</span>
                </label>
                <label>
                  <input type="radio" name="size" value="l" />
                  <span>L</span>
                </label>
              </div>
              <div className="separator"></div>
            </div>
            <div className="d-inline-block">
              <label for="animation-select" className="modal__label">Animation</label>
              <div className="custom-select">
                <select name="animations" id="animation-select" >
                    <option value="Fortune Wheel">Fortune Wheel</option>
                    <option value="Fade">Fade</option>
                </select>
              </div>
              <div className="custom-select">
                <select name="duration" id="animation-duration" disabled>
                    <option value="2">Auto 2 sec</option>
                    <option value="0">Manual</option>
                </select>
              </div>
            </div>
          </div>
          <div className="modal__body">
            <label className="modal__label">Tiles</label>
            <div className="carousel-editor">
              <div className="carousel-editor__header">
                <span className="carousel-editor__heading">Subheader</span>
                <span className="carousel-editor__heading">Heading</span>
                <span className="carousel-editor__heading">Background</span>
              </div>
              <ul className="carousel-editor__body">
                <li className="carousel-editor__item">
                  <span className="drag-icon">
                    <DragIcon />
                  </span>
                  <input className="custom-input" type="text" name="subheader" placeholder="Subheader"></input>
                  <input className="custom-input" type="text" name="heading" placeholder="Heading"></input>
                  <label class="toggle-switch">
                    <input type="checkbox" />
                    <span class="slider"></span>
                  </label>
                  <span className="more-icon">
                    <MoreIcon />
                  </span>
                  <div className="more-dropdown">
                    <ul>
                      <li>
                        <span className="more-dropdown__icon">
                          <DuplicateIcon />
                        </span>
                        <span>Duplicate</span>
                      </li>
                      <li>
                        <span className="more-dropdown__icon">
                          <PlusIcon />
                        </span>
                        <span>More Options</span>
                      </li>
                      <li>
                        <span className="more-dropdown__icon">
                          <DeleteIcon />
                        </span>
                        <span>Delete</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;




