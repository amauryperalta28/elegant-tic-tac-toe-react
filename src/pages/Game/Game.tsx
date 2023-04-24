import { useCallback, useEffect, useReducer } from 'react';

import './Game.css';
import { BoardBox } from '../../components';
import {
  changeTurnForPlayer1Action,
  changeTurnForPlayer2Action,
  finishGameAction,
  gameReducer,
  registerMoveForPlayer1Action,
  registerMoveForPlayer2Action,
  restartGameAction,
} from '../../reducers/GameReducer';
import { GameState } from '../../reducers/GameState';
import { Box } from '../../interfaces';

const initialState: GameState = {
  currentPlayerTurn: 1,
  gameFinished: false,
  boardBoxes: [
    new Box(0, 0, 'top-left-border-rounded'),
    new Box(0, 1),
    new Box(0, 2, 'top-right-border-rounded'),
    new Box(1, 0),
    new Box(1, 1),
    new Box(1, 2),
    new Box(2, 0, 'bottom-left-border-rounded'),
    new Box(2, 1),
    new Box(2, 2, 'bottom-right-border-rounded'),
  ],
};

export const Game = () => {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  const { boardBoxes } = state;
  console.info(state);
  const registerMove = useCallback(
    (id: string) => {
      const { currentPlayerTurn } = state;

      if (currentPlayerTurn === 1) {
        dispatch(registerMoveForPlayer1Action(id));
        dispatch(changeTurnForPlayer2Action());
      } else {
        dispatch(registerMoveForPlayer2Action(id));
        dispatch(changeTurnForPlayer1Action());
      }
    },
    [state]
  );

  const didThisPlayerWon = useCallback(
    (playerSymbol: string) => {
      const topRow =
        boardBoxes[0].content === playerSymbol &&
        boardBoxes[1].content === playerSymbol &&
        boardBoxes[2].content === playerSymbol;

      const middleRow =
        boardBoxes[3].content === playerSymbol &&
        boardBoxes[4].content === playerSymbol &&
        boardBoxes[5].content === playerSymbol;

      const bottomRow =
        boardBoxes[6].content === playerSymbol &&
        boardBoxes[7].content === playerSymbol &&
        boardBoxes[8].content === playerSymbol;

      const leftColumn =
        boardBoxes[0].content === playerSymbol &&
        boardBoxes[3].content === playerSymbol &&
        boardBoxes[6].content === playerSymbol;

      const middleColumn =
        boardBoxes[1].content === playerSymbol &&
        boardBoxes[4].content === playerSymbol &&
        boardBoxes[7].content === playerSymbol;

      const rightColumn =
        boardBoxes[2].content === playerSymbol &&
        boardBoxes[5].content === playerSymbol &&
        boardBoxes[8].content === playerSymbol;

      const leftRightDiagonal =
        boardBoxes[0].content === playerSymbol &&
        boardBoxes[4].content === playerSymbol &&
        boardBoxes[8].content === playerSymbol;

      const rightLeftDiagonal =
        boardBoxes[2].content === playerSymbol &&
        boardBoxes[4].content === playerSymbol &&
        boardBoxes[6].content === playerSymbol;

      const winnerPositions = [
        topRow,
        middleRow,
        bottomRow,
        leftColumn,
        middleColumn,
        rightColumn,
        leftRightDiagonal,
        rightLeftDiagonal,
      ];

      return winnerPositions.some((w) => w);
    },
    [boardBoxes]
  );

  const showWinner = useCallback(() => {
    if (didThisPlayerWon('X')) {
      alert(`Jugador 1 ganó!!!!`);
    } else {
      alert(`Jugador 2 ganó!!!!`);
    }
  }, [didThisPlayerWon]);

  const didGameFinished = useCallback(() => {
    return didThisPlayerWon('X') || didThisPlayerWon('0');
  }, [didThisPlayerWon]);

  useEffect(() => {
    setTimeout(() => {
      if (didGameFinished()) {
        dispatch(finishGameAction());
        showWinner();

        if (confirm('Le gustaria juegar otra partida?')) {
          dispatch(restartGameAction());
        } else {
          dispatch(restartGameAction());
          history.back();
        }
      }
    }, 10);
  }, [didGameFinished, showWinner]);

  return (
    <>
      <div className="board-background">
        <div className="board-square">
          {boardBoxes.map((box) => (
            <BoardBox
              key={box.id}
              id={box.id}
              borderRadiusClass={box.borderRadiusClass}
              content={box.content}
              onClick={registerMove}
            />
          ))}
        </div>
      </div>
    </>
  );
};
