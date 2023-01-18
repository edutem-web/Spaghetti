import {Image, StyleSheet} from "react-native";

const Emoji = ({level}) => {
  switch (level) {
    case 3:
      return (
        <Image
          source={require("../../assets/images/emoji0.png")}
          style={styles.emoji}
        />
      );
    case 2:
      return (
        <Image
          source={require("../../assets/images/emoji1.png")}
          style={styles.emoji}
        />
      );
    case 1:
      return (
        <Image
          source={require("../../assets/images/emoji2.png")}
          style={styles.emoji}
        />
      );
    default:
      return (
        <Image
          source={require("../../assets/images/emoji2.png")}
          style={styles.emoji}
        />
      );
  }
};

const styles = StyleSheet.create({
  emoji: {
    position: "absolute",
    width: 60,
    height: 60,
    top: -190,
    left: 20
  }
});

export default Emoji;
