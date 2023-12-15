import { Console } from "@woowacourse/mission-utils";
import InputView from "../views/InputView.js";
import Validate from "../utils/Validate.js";

export default class InputController {
  async inputName() {
    while (true) {
      const input = await InputView.readName();
      try {
        Validate.name(input);
        return input.split(",").map((value) => value.trim());
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
  async inputCannotEat(name) {
    while (true) {
      const input = await InputView.readCannotEat(name);
      try {
        Validate.cannotEat(input);
        return input.split(",").map((value) => value.trim());
      } catch (error) {
        Console.print(error.message);
      }
    }
  }
}
