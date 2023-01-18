import Animated, {FadeIn, FadeOut} from "react-native-reanimated";
import GoBackButton from "../../components/results/GoBackButton";
import RetryButton from "../../components/results/RetryButton";
import ChunkBoxContainer from "../../components/results/ChunkBoxContainer";
import {StyleSheet} from "react-native";
import GoodBackground from "../../components/results/good/GoodBackground";
import GoodText from "../../components/results/good/GoodText";
import usePlaySound from "../../hooks/usePlaySound";
import {useContext, useEffect} from "react";
import AudioPathContext from "../../contexts/AudioPathContext";

const GoodScreen = () => {
  const {audioPath} = useContext(AudioPathContext);
  const playSound = usePlaySound();
  useEffect(() => {
    // FileSystem.copyFile(
    //   audioPath,
    //   `${FileSystem.CachesDirectoryPath}/record.aac`
    // )
    //   .then(() => {
    //     console.log(
    //       "copy file success",
    //       `${FileSystem.CachesDirectoryPath}/record.aac`
    //     );
    //     const recordSound = new Sound(
    //       "record.aac",
    //       FileSystem.CachesDirectoryPath,
    //       error => {
    //         if (error) {
    //           console.log("failed to load your voice", error);
    //           return;
    //         }
    //         recordSound.play(success => {
    //           if (success) {
    //             console.log("successfully finished playing your voice");
    playSound("good", () => {
      // TODO: NOTHING TO DO.
    });
    //         } else {
    //           console.log("playback failed due to audio decoding errors");
    //         }
    //       });
    //     }
    //   );
    // })
    // .catch(error => {
    //   console.log("copy file error", error);
    // });
  }, []);
  return (
    <Animated.View style={styles.container} entering={FadeIn} exiting={FadeOut}>
      <GoodBackground />
      <GoodText />
      <GoBackButton />
      <RetryButton />
      <ChunkBoxContainer />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 3,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#80CDEF"
  }
});

export default GoodScreen;
