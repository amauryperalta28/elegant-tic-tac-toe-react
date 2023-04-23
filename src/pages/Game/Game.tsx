import { useCallback, useReducer } from 'react';

import './Game.css';
import { BoardBox } from '../../components';
import {
  changeTurnForPlayer1Action,
  changeTurnForPlayer2Action,
  gameReducer,
  registerMoveForPlayer1Action,
  registerMoveForPlayer2Action,
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

          {/* <BoardBox
            id="0_0"
            borderRadiusClass="top-left-border-rounded"
            onClick={registerMove}
          />
          <BoardBox id="0_1" onClick={registerMove} />
          <BoardBox
            id="0_2"
            borderRadiusClass="top-right-border-rounded"
            onClick={registerMove}
          />

          <BoardBox id="1_0" onClick={registerMove} />
          <BoardBox id="1_1" onClick={registerMove} />
          <BoardBox id="1_2" onClick={registerMove} />

          <BoardBox
            id="2_0"
            borderRadiusClass="bottom-left-border-rounded"
            onClick={registerMove}
          />
          <BoardBox id="2_1" onClick={registerMove} />
          <BoardBox
            id="2_2"
            borderRadiusClass="bottom-right-border-rounded"
            onClick={registerMove}
          /> */}
        </div>
      </div>
    </>
  );
};
