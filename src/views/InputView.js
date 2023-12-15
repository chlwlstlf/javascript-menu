import { Console } from "@woowacourse/mission-utils";
import gameMessage from "../constants/gameMessage.js";

const InputView = {
  async readName() {
    const input = await Console.readLineAsync(gameMessage.INPUT.NAME);
    return input;
  },
  async readCannotEat(name) {
    const input = await Console.readLineAsync(gameMessage.INPUT.CANNOT_EAT(name));
    return input;
  },
};

export default InputView;
