import { Console } from "@woowacourse/mission-utils";
import OutputView from "../views/OutputView.js";
import InputController from "./InputController.js";
import { RandomCategory } from "../models/RandomCategory.js";
import { RandomMenu } from "../models/RandomMenu.js";
import menu from "../constants/menu.js";

export default class MainController {
  #names;
  #coachesInfo = {};
  #categories = [];

  async start() {
    OutputView.start();
    await this.input();
    await this.setCategory();
    await this.setMenu();
    await this.output();
  }

  async input() {
    const inputController = new InputController();
    this.#names = await inputController.inputName();
    for (let i = 0; i < this.#names.length; i++) {
      const cannotEat = await inputController.inputCannotEat(this.#names[i]);
      this.#coachesInfo[this.#names[i]] = {
        cannotEat: cannotEat,
        canEat: [],
      };
    }
  }

  async setCategory() {
    while (true) {
      const category = new RandomCategory().category;
      const categoryCount = this.#categories.filter((value) => value === category).length;
      if (categoryCount < 2) {
        this.#categories.push(category);
      }
      if (this.#categories.length === 5) break;
    }
  }

  async setMenu() {
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < this.#names.length; j++) {
        while (true) {
          const menu = new RandomMenu(this.#categories[i]).menu;
          if (!(this.#coachesInfo[this.#names[j]].cannotEat.includes(menu) || this.#coachesInfo[this.#names[j]].canEat.includes(menu))) {
            this.#coachesInfo[this.#names[j]].canEat.push(menu);
            break;
          }
        }
      }
    }
  }

  async output() {
    OutputView.resultTitle();
    OutputView.result("카테고리", this.#categories);
    Object.entries(this.#coachesInfo).forEach(([key, value]) => {
      OutputView.result(key, value.canEat);
    });
    OutputView.exit();
  }
}
