import MissionUtils from "@woowacourse/mission-utils";
import OutputView from "../views/OutputView.js";
import InputController from "./InputController.js";
import { RandomCategory } from "../models/RandomCategory.js";
import { RandomMenu } from "../models/RandomMenu.js";
import menu from "../constants/menu.js";

export default class MainController {
  #coachesInfo = {};
  #categories = [];
  async start() {
    const names = ["토미", "제임스", "포코"];
    const cannotEat = [
      ["우동", "스시"],
      ["뇨끼", "월남쌈"],
      ["마파두부", "고추잡채"],
    ];
    for (let i = 0; i < names.length; i++) {
      this.#coachesInfo[names[i]] = {
        cannotEat: cannotEat[i],
        canEat: [],
      };
    }
    while (true) {
      const category = new RandomCategory().category;
      const categoryCount = this.#categories.filter((value) => value === category).length;
      if (categoryCount < 2) {
        this.#categories.push(category);
      }
      if (this.#categories.length === 5) break;
    }

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < names.length; j++) {
        while (true) {
          const menu = new RandomMenu(this.#categories[i]).menu;
          if (!(this.#coachesInfo[names[j]].cannotEat.includes(menu) || this.#coachesInfo[names[j]].canEat.includes(menu))) {
            this.#coachesInfo[names[j]].canEat.push(menu);
            break;
          }
        }
      }
    }
    OutputView.resultTitle();
    OutputView.result("카테고리", this.#categories);
    Object.entries(this.#coachesInfo).forEach(([key, value]) => {
      OutputView.result(key, value.canEat);
    });
    OutputView.exit();
  }
}
