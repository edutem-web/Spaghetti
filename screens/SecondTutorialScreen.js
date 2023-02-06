import {Image, StyleSheet} from "react-native";
import Lottie from "lottie-react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming
} from "react-native-reanimated";
import {useEffect} from "react";
import Sound from "react-native-sound";

const SecondTutorialScreen = () => {
  const scale = useSharedValue(1);
  const opacity = useSharedValue(0);
  const bounceStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: scale.value
        }
      ],
      opacity: opacity.value
    };
  });
  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.5, {
        duration: 2700
      }),
      0,
      false
    );
    opacity.value = withRepeat(
      withTiming(1, {
        duration: 2700
      }),
      0,
      false
    );
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      const alphabetSound = new Sound("d.mp3", Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log("failed to load the sound", error);
          return;
        }
        alphabetSound.play(success => {
          if (success) {
            console.log("successfully finished playing");
          } else {
            console.log("playback failed due to audio decoding errors");
          }
        });
      });
    }, 2700);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Image
        source={require("../assets/images/tutorial1.png")}
        style={styles.tutorialImage}
      />
      <Lottie
        source={require("../assets/images/handtap.json")}
        autoPlay={true}
        loop={true}
        speed={0.5}
        style={styles.handTap}
      />
      <Animated.Image
        source={require("../assets/images/alphabet.png")}
        style={[styles.alphabet, bounceStyle]}
      />
    </>
  );
};

const styles = StyleSheet.create({
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
  },
  alphabet: {
    position: "absolute",
    left: "35%",
    top: "40%",
    opacity: 0,
    transform: [
      {
        scale: 0
      }
    ]
  }
});

export default SecondTutorialScreen;
