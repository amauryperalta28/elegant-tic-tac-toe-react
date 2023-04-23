
import "./BoardBox.css";

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
  const getClass = () => {
    return content === 'X'
      ? 'empty-box ' + borderRadiusClass + ' x-box'
      : content === '0'
      ? 'empty-box ' + borderRadiusClass + ' zero-box'
      : 'empty-box ' + borderRadiusClass;
  };
  return (
    <div>
      <div id={id} className={getClass()} onClick={()=> onClick(id)}></div>
    </div>
  );
};
