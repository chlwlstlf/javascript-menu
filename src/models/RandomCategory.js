import MissionUtils from "@woowacourse/mission-utils";

export class RandomCategory {
  constructor() {
    const categories = new Map([
      [1, "일식"],
      [2, "한식"],
      [3, "중식"],
      [4, "아시안"],
      [5, "양식"],
    ]);
    const category = categories.get(MissionUtils.Random.pickNumberInRange(1, 5));
    this.category = category;
  }
}
