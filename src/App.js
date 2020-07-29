import React from 'react';
import './App.sass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="modal">
          <div className="modal__header">
            <h2 className="modal__title">Header Settings</h2>
            <span className="modal__label">Size</span>
            <div className="segment-control">
              <label>
                <input type="radio" name="size" value="s" />
                <span>S</span>
              </label>
              <label>
                <input type="radio" name="size" value="m" checked />
                <span>M</span>
              </label>
              <label>
                <input type="radio" name="size" value="l" />
                <span>L</span>
              </label>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;




