import './BoardBox.css';
import { useCallback } from 'react';

type Props = {
  content?: string;
  borderRadiusClass?: string;
  id: string;
  onClick: (id: string) => void;
};

export const BoardBox = ({
  content = '',
  borderRadiusClass,
  id,
  onClick,
}: Props) => {
  const getClass = useCallback(() => {
    return content === 'X'
      ? 'empty-box ' + borderRadiusClass + ' x-box'
      : content === '0'
      ? 'empty-box ' + borderRadiusClass + ' zero-box'
      : 'empty-box ' + borderRadiusClass;
  }, [borderRadiusClass, content]);

  const notifyClick = useCallback(() => {
    if (content.length === 0) {
      onClick(id);
    }
  }, [id, onClick, content]);

  return (
    <div>
      <div id={id} className={getClass()} onClick={notifyClick}></div>
    </div>
  );
};
