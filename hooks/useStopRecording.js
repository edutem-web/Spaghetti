import SoundRecorder from "react-native-sound-recorder";
import axios from "axios";
import Constants from "../shared/Constants";
import {useContext} from "react";
import ChunksContext from "../contexts/ChunksContext";
import useErrorHandler from "./useErrorHandler";
import RecordingStatusContext from "../contexts/RecordingStatusContext";
import ResultsContext from "../contexts/ResultsContext";
import ResultsStatusContext from "../contexts/ResultsStatusContext";
import LoadingStatusContext from "../contexts/LoadingStatusContext";
import TimerContext from "../contexts/TimerContext";
import logJSON from "../utils/logJSON";
import AudioPathContext from "../contexts/AudioPathContext";

const useStopRecording = () => {
  const {setAudioPath} = useContext(AudioPathContext);
  const {setIsLoading} = useContext(LoadingStatusContext);
  const {chunks} = useContext(ChunksContext);
  const {setResults} = useContext(ResultsContext);
  const {setIsRecording} = useContext(RecordingStatusContext);
  const {setResultsScreenShown} = useContext(ResultsStatusContext);
  const {timer} = useContext(TimerContext);
  const errorHandler = useErrorHandler();
  return async () => {
    let audioPath;
    try {
      setIsLoading(true);
      const {path} = await SoundRecorder.stop();
      audioPath = path;
      clearTimeout(timer);
      console.log("Timer cleared.");
      console.log("Result saved in " + audioPath);
      const formData = new FormData();
      formData.append("audio", {
        uri: "file://" + audioPath,
        type: "audio/aac",
        name: "record.aac"
      });
      let modifiedChunks = chunks;
      if (chunks[1] === "ow(au)" || chunks[1] === "ow(ou)") {
        modifiedChunks[1] = "ow";
      }
      if (chunks[1] === "oo(u)" || chunks[1] === "oo(uu)") {
        modifiedChunks[1] = "oo";
      }
      formData.append("words", modifiedChunks);
      const response = await axios.post(
        Constants.PRONUNCIATION_API_ENDPOINT,
        formData,
        {
          headers: {
            "X-API-KEY": Constants.API_KEY,
            accept: "application/json",
            "Content-Type": "multipart/form-data"
          }
        }
      );
      const {data} = response;

      logJSON(data);
      setResults(data);
      setIsLoading(false);
      setResultsScreenShown(true);
    } catch (error) {
      if (error.status === null || error.code === "ERR_NETWORK") {
        console.log("Responded with status null, retrying...");
        const formData = new FormData();
        formData.append("audio", {
          uri: "file://" + audioPath,
          type: "audio/aac",
          name: "record.aac"
        });
        formData.append("words", chunks);
        try {
          const response = await axios.post(
            Constants.PRONUNCIATION_API_ENDPOINT,
            formData,
            {
              headers: {
                "X-API-KEY": Constants.API_KEY,
                accept: "application/json",
                "Content-Type": "multipart/form-data"
              }
            }
          );
          setAudioPath(audioPath);
          const {data} = response;
          logJSON(data);
          setResults(data);
          setIsLoading(false);
          setResultsScreenShown(true);
        } catch (error) {
          logJSON(error);
          setIsLoading(false);
        }
      } else {
        errorHandler("RECORDING_ERROR", error);
        setIsLoading(false);
      }
    }
    setIsRecording(false);
  };
};

export default useStopRecording;
