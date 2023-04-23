
type Props = {
  x: number;
  y: number;
  content?: string;
  borderRadiusClass?: string;
  id: string;
  onClick: (x: number,y: number) => void;
};

export const Box = ({
  x,
  y,
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
      <div id={id} className={getClass()} onClick={()=> onClick(x,y)}></div>
    </div>
  );
};
