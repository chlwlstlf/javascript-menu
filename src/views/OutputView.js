import MissionUtils from "@woowacourse/mission-utils";
import gameMessage from "../constants/gameMessage.js";

const OutputView = {
  start() {
    MissionUtils.Console.print(gameMessage.OUTPUT.START);
  },
  resultTitle() {
    MissionUtils.Console.print(gameMessage.OUTPUT.RESULT_TITLE);
  },
  result(value, resultArray) {
    MissionUtils.Console.print(gameMessage.OUTPUT.RESULT(value, resultArray));
  },
  exit() {
    MissionUtils.Console.print(gameMessage.OUTPUT.EXIT);
  },
};

export default OutputView;
