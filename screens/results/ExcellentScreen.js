import {StyleSheet} from "react-native";
import Animated, {FadeIn, FadeOut} from "react-native-reanimated";
import ExcellentBackground from "../../components/results/excellent/ExcellentBackground";
import ExcellentText from "../../components/results/excellent/ExcellentText";
import GoBackButton from "../../components/results/GoBackButton";
import RetryButton from "../../components/results/RetryButton";
import ChunkBoxContainer from "../../components/results/ChunkBoxContainer";
import {useContext, useEffect} from "react";
import usePlaySound from "../../hooks/usePlaySound";
import AudioPathContext from "../../contexts/AudioPathContext";
import Sound from "react-native-sound";
import FileSystem from "react-native-fs";

const ExcellentScreen = () => {
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
    playSound("excellent", () => {
      const recordSound = new Sound(
        "record.aac",
        FileSystem.CachesDirectoryPath,
        error => {
          if (error) {
            console.log("Failed to load the sound", error);
          }
          recordSound.setVolume(3.0);
          recordSound.play(success => {
            if (success) {
              console.log("Successfully finished playing");
            } else {
              console.log("playback failed due to audio decoding errors");
            }
          });
        }
      );
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
      <ExcellentBackground />
      <ExcellentText />
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
    bottom: 0,
    right: 0,
    backgroundColor: "#64C137"
  }
});

export default ExcellentScreen;
