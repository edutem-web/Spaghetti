import {useContext} from "react";
import ResultsContext from "../../contexts/ResultsContext";
import ExcellentScreen from "./ExcellentScreen";
import GoodScreen from "./GoodScreen";
import NiceTryScreen from "./NiceTryScreen";
import Constants from "../../shared/Constants";

const ResultsScreen = () => {
  const {results} = useContext(ResultsContext);
  const words = results.words;
  const scores = words.map(word => word.score);
  const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;
  const sentenceScore = averageScore;
  if (sentenceScore >= Constants.GOOD_THRESHOLD) {
    return <ExcellentScreen />;
  } else if (sentenceScore >= Constants.MEDIOCRE_THRESHOLD) {
    return <GoodScreen />;
  } else {
    return <NiceTryScreen />;
  }
};

export default ResultsScreen;
