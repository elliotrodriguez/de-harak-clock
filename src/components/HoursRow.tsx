import NumberCube from "./NumberCube";

const HoursRow = (props: any) => {
  const currentHour = (parseInt(props.hour) % 12).toString();

  const hours = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {hours.map((hour) => (
        <NumberCube
          displayNumber={hour}
          highlightNumber={currentHour === hour ? true : false}
          highlightColor={"red"}
        />
      ))}
    </div>
  );
};

export default HoursRow;
