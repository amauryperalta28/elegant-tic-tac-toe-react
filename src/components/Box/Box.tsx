
type Props = {
  content: string;
  borderRadiusClass: string;
  id: string;
  onClick: () => void;
};

export const Box = ({
  content,
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
      <div id={id} className={getClass()} onClick={onClick}></div>
    </div>
  );
};
