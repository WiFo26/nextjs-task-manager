import { LEVEL } from "./LEVEL.enum";

export class Task {
  id = 0;
  name = "";
  completed = false;
  level = LEVEL.NORMAL;

  constructor(id,name, completed, level) {
    this.id = id;
    this.name = name;
    this.completed = completed;
    this.level = level;
  }
}
