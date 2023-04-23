import { Box } from '../interfaces';
import { GameAction } from './GameAction';
import { GameState } from './GameState';
import { Option } from './Option';



export const finishGameAction = (): GameAction => ({ type: Option.FinishGame });
export const restartGameAction = (): GameAction => ({ type: Option.RestartGame });
export const changeTurnForPlayer1Action = (): GameAction => ({ type: Option.ChangeTurnForPlayer1 });
export const changeTurnForPlayer2Action = (): GameAction => ({ type: Option.ChangeTurnForPlayer2 });
export const registerMoveForPlayer1Action = (id: string): GameAction => ({ type: Option.RegisterMoveForPlayer1, payload: {id} });
export const registerMoveForPlayer2Action = (id: string): GameAction => ({ type: Option.RegisterMoveForPlayer2, payload: {id} });


export const gameReducer = (state: GameState, gameAction: GameAction): GameState => {
  switch (gameAction.type) {
    case Option.FinishGame:
      return { ...state, gameFinished: true };
    case Option.RestartGame:
      return { ...state, gameFinished: false };
    case Option.ChangeTurnForPlayer1:
      return { ...state, currentPlayerTurn: 1 };
    case Option.ChangeTurnForPlayer2:
      return { ...state, currentPlayerTurn: 2 };
    case Option.RegisterMoveForPlayer1:
      return {
        ...state,
        boardBoxes: state.boardBoxes.map((box) => {
          if (box.id === gameAction?.payload?.id) {
            const boxMove = new Box(box.x, box.y, box.borderRadiusClass);
            boxMove.setCross();

            return boxMove;
          }
          return box;
        }),
      };
    case Option.RegisterMoveForPlayer2:
      return {
        ...state,
        boardBoxes: state.boardBoxes.map((box) => {
          if (box.id === gameAction?.payload?.id) {
            const boxMove = new Box(box.x, box.y, box.borderRadiusClass);
            boxMove.setZero();

            return boxMove;
          }
          return box;
        }),
      };
    default:
      return state;
  }
};
