import React, { useEffect, useRef, useState } from "react";
import { Text, View, StyleSheet, TouchableHighlight } from "react-native";
import Colors from "../utils/Colors";
const convertMinToMilis = (min) => {
  return min * 60 * 1000;
};
const convertMilisToMinStr = (milis) => {
  const secs = Math.floor((milis / 1000) % 60);
  const mins = Math.floor(milis / 1000 / 60);
  const str =
    (mins < 10 ? `0${mins}` : mins) + ":" + (secs < 10 ? `0${secs}` : secs);
  return str;
};

function CountDownTimer({ minutes, isPaused = true, onProgress }) {
  const [milis, setMilis] = useState();
  const interval = useRef(null);
  const countDown = () => {
    setMilis((time) => {
      if (time === 0) {
        return time;
      } else {
        // onProgress((time - 1000) / convertMinToMilis(minutes));
        return time - 1000;
      }
    });
  };
  useEffect(() => {
    setMilis(convertMinToMilis(minutes));
  }, [minutes]);
  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }
    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);
  return <Text style={styles.timer}>{convertMilisToMinStr(milis)}</Text>;
}

export default CountDownTimer;

const styles = StyleSheet.create({
  timer: {
    marginTop: 30,
    fontSize: 120,
    borderRadius: 10,
    backgroundColor: Colors.bgColor,
    borderColor: Colors.textColor,
    borderWidth: 2,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.textColor,
  },
});
