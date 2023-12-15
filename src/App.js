import MainController from "./controllers/MainController.js";

class App {
  constructor() {
    this.mainController = new MainController();
  }
  async play() {
    this.mainController.start();
  }
}

export default App;
