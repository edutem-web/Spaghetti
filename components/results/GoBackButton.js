import {Image, StyleSheet, TouchableOpacity} from "react-native";
import {useContext} from "react";
import ResultsStatusContext from "../../contexts/ResultsStatusContext";
import usePlaySound from "../../hooks/usePlaySound";

const GoBackButton = () => {
  const {setResultsScreenShown} = useContext(ResultsStatusContext);
  const playSound = usePlaySound();
  const goBack = () => {
    playSound("click", () => {
      setResultsScreenShown(false);
    });
  };
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={styles.backButton}
      onPress={goBack}>
      <Image
        source={require("../../assets/images/back.png")}
        style={styles.goBackImage}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    bottom: 10,
    right: 30
  },
  goBackImage: {
    width: 60,
    height: 60
  }
});

export default GoBackButton;
