import NumberCube from "./NumberCube";

const numberArray = Array.from(Array(60).keys());

const MinutesSecondsRow = (props: any) => {
  const highlightHour = "blue";
  const highlightSecond = "green";

  let highlightColor = "white";
  let matched = false;

  const highlightValue = (num: number) => {
    const currentMinute = props.minute;
    const currentSecond = props.second;
    if (currentMinute === num.toString()) {
      highlightColor = highlightHour;

      if (currentSecond === currentMinute) {
        highlightColor = highlightSecond;
      }

      matched = true;
    } else if (currentSecond === num.toString()) {
      highlightColor = highlightSecond;
      matched = true;
    } else {
      matched = false;
    }

    return matched;
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {numberArray.map((num) => (
        <NumberCube
          displayNumber={num < 10 ? `0${num.toString()}` : num.toString()}
          highlightNumber={highlightValue(num)}
          highlightColor={highlightColor}
        />
      ))}
    </div>
  );
};

export default MinutesSecondsRow;
