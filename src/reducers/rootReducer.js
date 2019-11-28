import { createStore } from 'redux'
import calculateWinner from '../helper/calculateWinner'

const initialState = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0,
    xIsNext: true
  }
  
  const reducer = (state = initialState, action )  => {
    switch(action.type)
    {
      case 'CLICK':
        {
          const i = action.i
          const history_t = state.history.slice(0, state.stepNumber + 1);
          const current = history_t[history_t.length - 1];
          const squares = current.squares.slice();
          if (calculateWinner(squares) || squares[i]) {
            return{
              history: state.history,
              stepNumber: state.stepNumber,
              xIsNext: state.xIsNext
            }
          }
          squares[i] = state.xIsNext ? "X" : "O";
          return {
            history: history_t.concat([
              {
                squares: squares
              }
            ]),
            stepNumber: history_t.length,
            xIsNext: !state.xIsNext
          }
        }
      case 'JUMPTO':
        {
          return {
            history: state.history,
            stepNumber: action.move,
            xIsNext: (action.move %2 === 0)
          }
        }  
    }
    return state
  }

  export default reducer;
