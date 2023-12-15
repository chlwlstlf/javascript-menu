import { Console } from "@woowacourse/mission-utils";
import gameMessage from "../constants/gameMessage.js";

const OutputView = {
  start() {
    Console.print(gameMessage.OUTPUT.START);
  },
  resultTitle() {
    Console.print(gameMessage.OUTPUT.RESULT_TITLE);
  },
  result(value, resultArray) {
    Console.print(gameMessage.OUTPUT.RESULT(value, resultArray));
  },
  exit() {
    Console.print(gameMessage.OUTPUT.EXIT);
  },
};

export default OutputView;
