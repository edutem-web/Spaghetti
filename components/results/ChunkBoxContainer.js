import ChunkBox from "./ChunkBox";
import {StyleSheet, View} from "react-native";
import {useContext} from "react";
import ResultsContext from "../../contexts/ResultsContext";
import Constants from "../../shared/Constants";

const ChunkBoxContainer = () => {
  const {results} = useContext(ResultsContext);
  const words = results.words.map(word => word.word);
  const scores = results.words.map(word => word.score);
  const grades = scores.map(score => {
    if (score >= Constants.CHUNK_GOOD_THRESHOLD) {
      return 3;
    } else if (score >= Constants.CHUNK_MEDIOCRE_THRESHOLD) {
      return 2;
    } else if (score >= Constants.CHUNK_BAD_THRESHOLD) {
      return 1;
    } else {
      return 0;
    }
  });
  return (
    <View style={styles.chunkBoxContainer}>
      <ChunkBox chunk={words[0].toLowerCase()} grade={grades[0]} />
      <ChunkBox chunk={words[1].toLowerCase()} grade={grades[1]} />
      <ChunkBox
        chunk={words[2].toLowerCase()}
        grade={grades[2]}
        isFinalChunk={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chunkBoxContainer: {
    position: "relative",
    top: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default ChunkBoxContainer;
