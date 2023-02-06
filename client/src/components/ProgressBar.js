const ProgressBar = ({ progress }) => {
  const colors = [
    "#913175",
    "#F94A29",
    "#5D3891",
    "#698269",
    "#A084DC",
    "#F48484",
    "#00337C",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  return (
    <div className="outerBar">
      <div
        className="innerBar"
        style={{ width: `${progress}%`, backgroundColor: randomColor }}
      ></div>
    </div>
  );
};
export default ProgressBar;
