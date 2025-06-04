import type { TaskStateModel } from "./TaskStateModel";

export class TaskModel {
  public readonly id: string;
  public name: string;
  public durationInMinutes: number;
  public startDate: Date;
  public completeDate: Date | null; // Quando o timer chega ao final
  public interruptDate: Date | null; // Quando a task for interrompida
  public type: keyof TaskStateModel["config"];

  constructor(
    id: string,
    name: string,
    durationInMinutes: number,
    startDate: Date,
    completeDate: Date | null,
    interruptDate: Date | null,
    type: "workTime" | "shortBreakTime" | "longBreakTime"
  ) {
    this.id = id;
    this.name = name;
    this.durationInMinutes = durationInMinutes;
    this.startDate = startDate;
    this.completeDate = completeDate;
    this.interruptDate = interruptDate;
    this.type = type;
  }
}
