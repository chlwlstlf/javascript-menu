import { Random } from "@woowacourse/mission-utils";
import menu from "../constants/menu.js";

export class RandomMenu {
  constructor(category) {
    const newArray = Array.from({ length: 9 }, (_, index) => index + 1);
    const index = Random.shuffle(newArray)[0] - 1;
    this.menu = menu[category][index];
  }
}
