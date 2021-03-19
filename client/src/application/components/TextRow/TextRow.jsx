import './TextRow.scss';

const TextRow = ({ title, subtitle, type = '' }) => {
  const typeClass = `TextRow-${type}`;

  return (
    <div className={'TextRow ' + typeClass}>
      <div className="TextRow-title">{title}</div>
      <div className="TextRow-subtitle">{subtitle}</div>
    </div>
  );
};

export default TextRow;
