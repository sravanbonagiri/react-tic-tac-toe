import React from 'react';
import ReactDOM from 'react-dom';
import Board from './board'
import {connect} from 'react-redux'
import calculateWinner from '../helper/calculateWinner'
import '../index.css'

class Game extends React.Component {
    render() {
      const history = this.props.state.history;
      const current = history[this.props.state.stepNumber];
      const winner = calculateWinner(current.squares);
      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';
        return (
          <li key={move}>
            <button className = "button" onClick={() => this.props.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
  
      let status;
      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (this.props.state.xIsNext ? "X" : "O");
      }
  
      return (
        <div className="game">
          <div className="game-board">
            <Board
              squares={current.squares}
              onClick={i => this.props.handleClick(i)}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      );
    }
  }

  function mapStateToProps(state){
    return{
      state: state
    }
  }

  function mapDispatchToProps(dispatch){
    return {
      handleClick: (i) => dispatch({type: 'CLICK', i}),
      jumpTo: (move) => dispatch({type: 'JUMPTO', move})
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Game);