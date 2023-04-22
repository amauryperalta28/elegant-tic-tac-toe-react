export const Game = () => {
  return (
    <>
      <div className="board-background">
        <div className="board-square">
          <div id="0_0" className="top-left-border-rounded empty-box"></div>
          <div id="1_0" className="empty-box"></div>
          <div id="2_0" className="top-right-border-rounded empty-box"></div>

          <div id="0_1" className="empty-box"></div>
          <div id="1_1" className="empty-box"></div>
          <div id="2_1" className="empty-box"></div>

          <div id="0_2" className="bottom-left-border-rounded empty-box"></div>
          <div id="1_2" className="empty-box"></div>
          <div id="2_2" className="bottom-right-border-rounded empty-box"></div>
        </div>
      </div>
    </>
  );
};
