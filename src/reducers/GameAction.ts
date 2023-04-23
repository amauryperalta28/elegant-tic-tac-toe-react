import { GamePayload } from './GamePayload';
import { Option } from "./Option";


export interface GameAction {
    type: Option;
    payload?: GamePayload;
}
