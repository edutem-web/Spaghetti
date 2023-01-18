import {StyleSheet, Text, View} from "react-native";
import {useContext} from "react";
import LogContext from "../contexts/LogContext";

const Notice = () => {
  const {log} = useContext(LogContext);
  return (
    <View style={styles.noticeContainer}>
      <Text style={styles.noticeText}>{log}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  noticeContainer: {
    zIndex: 1,
    position: "absolute",
    top: 25,
    left: 0,
    right: 0
  },
  noticeText: {
    textAlign: "center",
    fontSize: 14,
    color: "white"
  }
});

export default Notice;
