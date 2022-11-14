import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

import Board from "./components/Board";

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Board />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);