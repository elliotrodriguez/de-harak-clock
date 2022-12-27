import { useEffect, useState } from "react";
import HoursRow from "./HoursRow";
import MinutesSecondsRow from "./MinutesSecondsRow";

const HarakClock = () => {
  const [currentHour, setCurrentHour] = useState(
    new Date().getHours().toString()
  );
  const [currentMinute, setCurrentMinute] = useState(
    new Date().getMinutes().toString()
  );
  const [currentSecond, setCurrentSecond] = useState(
    new Date().getSeconds().toString()
  );
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHour(new Date().getHours().toString());
      setCurrentMinute(new Date().getMinutes().toString());
      setCurrentSecond(new Date().getSeconds().toString());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [currentHour, currentMinute, currentSecond]);

  return (
    <div style={{ width: "1300px" }}>
      <HoursRow hour={currentHour} />
      <MinutesSecondsRow minute={currentMinute} second={currentSecond} />
    </div>
  );
};

export default HarakClock;
