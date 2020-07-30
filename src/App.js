import React from 'react';
import './App.sass';

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
        </div>
      </header>
    </div>
  );
}

export default App;




