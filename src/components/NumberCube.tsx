interface NumberCubeProps {
  displayNumber: string;
  highlightNumber: boolean;
  highlightColor?: string;
}

const NumberCube = (props: NumberCubeProps) => {
  const { displayNumber, highlightNumber, highlightColor } = props;
  return (
    <div
      style={{
        display: "flex",
        borderColor: "white",
        borderWidth: 1,
        borderStyle: "solid",
        backgroundColor: "black",
        color: highlightNumber ? highlightColor : "white",
        fontWeight: 800,
        fontSize: 72,
        fontFamily: "Helvetica",
        width: "100px",
        height: "100px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {displayNumber}
    </div>
  );
};

export default NumberCube;
