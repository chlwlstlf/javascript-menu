import menu from "../constants/menu.js";
import errorMessage from "../constants/errorMessage.js";

const Validate = {
  name(input) {
    this.notNull(input);
    const splitedValue = input.split(",").map((value) => value.trim());
    this.limitedCoach(splitedValue);
    splitedValue.forEach((value) => {
      this.outOfRange(value);
    });
    this.notDuplicate(splitedValue);
  },

  cannotEat(input) {
    this.notNull(input);
    const splitedValue = input.split(",").map((value) => value.trim());
    splitedValue.forEach((value) => {
      this.hasValue(value);
    });
  },

  notNull(input) {
    if (!input.length) {
      throw new Error(errorMessage.NOT_NULL);
    }
  },

  limitedCoach(input) {
    if (input.length < 2 || input.length > 5) {
      throw new Error(errorMessage.LIMITED_COACH);
    }
  },

  outOfRange(input) {
    if (input.length < 2 || input.length > 4) {
      throw new Error(errorMessage.OUT_OF_RANGE);
    }
  },

  notDuplicate(input) {
    const inputSet = new Set(input);
    if (inputSet.size !== input.length) {
      throw new Error(errorMessage.NOT_DUPLICATE);
    }
  },

  hasValue(input) {
    const menuItems = Object.values(menu).join(", ");
    if (!menuItems.includes(input)) {
      throw new Error(errorMessage.NOT_DUPLICATE);
    }
  },
};

export default Validate;
