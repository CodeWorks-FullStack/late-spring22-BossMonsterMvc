import { BossesController } from "./Controllers/BossesController.js";
import { HerosController } from "./Controllers/HerosController.js";

class App {
  // NOTE Comment out this line and values stuff will never hurt you.
  // valuesController = new ValuesController();
  
  bossesController = new BossesController()
  herosController = new HerosController()
}

window["app"] = new App();
