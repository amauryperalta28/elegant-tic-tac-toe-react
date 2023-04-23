import { Box } from '../interfaces';


export interface GameState {
    currentPlayerTurn: number;
    gameFinished: boolean;
    boardBoxes: Array<Box>;
}
