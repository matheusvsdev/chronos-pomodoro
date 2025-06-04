import type { TaskModel } from "./TaskModel";

export class TaskStateModel {
  public tasks: TaskModel[];
  public secondsRemaining: number;
  public formattedSecondsRemaining: string;
  public activeTask: TaskModel | null;
  public currentCycle: number;
  public config: TaskConfig;

  constructor(
    tasks: TaskModel[],
    secondsRemaining: number,
    formattedSecondsRemaining: string,
    activeTask: TaskModel | null,
    currentCycle: number,
    config: TaskConfig
  ) {
    this.tasks = tasks;
    this.secondsRemaining = secondsRemaining;
    this.formattedSecondsRemaining = formattedSecondsRemaining;
    this.activeTask = activeTask;
    this.currentCycle = currentCycle;
    this.config = config;
  }
}

type TaskConfig = {
  workTime: number;
  shortBreakTime: number;
  longBreakTime: number;
};
