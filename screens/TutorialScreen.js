import {Image, StyleSheet, TouchableOpacity} from "react-native";
import {useState} from "react";
import RootScreen from "./RootScreen";
import Lottie from "lottie-react-native";

const TutorialScreen = () => {
  const [tutorialStage, setTutorialStage] = useState(0);
  const onPressTutorialImage = () => {
    setTutorialStage(tutorialStage + 1);
  };
  return (
    <>
      <TouchableOpacity
        style={styles.tutorialScreen}
        activeOpacity={0.8}
        onPress={onPressTutorialImage}>
        {tutorialStage === 0 && (
          <Image
            source={require("../assets/images/tutorial0.png")}
            style={styles.tutorialImage}
          />
        )}
        {tutorialStage === 1 && (
          <>
            <Image
              source={require("../assets/images/tutorial1.png")}
              style={styles.tutorialImage}
            />
            <Lottie
              source={require("../assets/images/handtap.json")}
              autoPlay={true}
              loop={true}
              style={styles.handTap}
            />
          </>
        )}
        {tutorialStage === 2 && (
          <Image
            source={require("../assets/images/tutorial2.png")}
            style={styles.tutorialImage}
          />
        )}
      </TouchableOpacity>
      {tutorialStage === 3 && <RootScreen />}
    </>
  );
};

const styles = StyleSheet.create({
  tutorialScreen: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  tutorialImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  handTap: {
    transform: [
      {
        translateX: -75
      },
      {
        translateY: 50
      },
      {
        scale: 0.6
      }
    ]
  }
});

export default TutorialScreen;
