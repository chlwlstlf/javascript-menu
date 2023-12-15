import MissionUtils from "@woowacourse/mission-utils";
import menu from "../constants/menu.js";

export class RandomMenu {
  constructor(category) {
    const newArray = Array.from({ length: menu[category].length }, (_, index) => index);
    const index = MissionUtils.Random.shuffle(newArray)[0];
    this.menu = menu[category][index];
  }
}
