import { useCallback } from 'react';

import './Game.css';
import { Box } from '../../components';

export const Game = () => {
  const registerMove = useCallback((x: number, y: number) => {
    const move = 1;
    console.log(move);
  }, []);

  return (
    <>
      <div className="board-background">
        <div className="board-square">
          <Box
            id="0_0"
            x={0}
            y={0}
            borderRadiusClass="top-left-border-rounded"
            onClick={registerMove}
          />
          <Box id="0_1" x={0} y={1} onClick={registerMove} />
          <Box
            id="0_2"
            x={0}
            y={2}
            borderRadiusClass="top-right-border-rounded"
            onClick={registerMove}
          />

          <Box id="1_0" x={1} y={0} onClick={registerMove} />
          <Box id="1_1" x={1} y={1} onClick={registerMove} />
          <Box id="1_2" x={1} y={2} onClick={registerMove} />

          <Box
            id="2_0"
            x={2}
            y={0}
            borderRadiusClass="bottom-left-border-rounded"
            onClick={registerMove}
          />
          <Box id="2_1" x={2} y={1} onClick={registerMove} />
          <Box
            id="2_2"
            x={2}
            y={2}
            borderRadiusClass="bottom-right-border-rounded"
            onClick={registerMove}
          />

        </div>
      </div>
    </>
  );
};
