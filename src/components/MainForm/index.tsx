import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from "react";
import { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../utils/getNextCycle";
import { getNextCycleType } from "../utils/getNextCycleType";
import { formatSecondsToMinutes } from "../utils/formatSecondsToMinutes";

export function MainForm() {
  const { state, setState } = useTaskContext();

  // const [taskName, setTaskName] = useState(""); Renderiza o componente várias vezes durante a digitação (Forma controlada, usada para validar o que é digitado em tempo real)
  const taskNameInput = useRef<HTMLInputElement>(null); // Não renderiza várias vezes, apenas quando envia o formulário (Forma não controlada, usada para validar o que é digitado após enviar o formulário)

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim(); // Guarda o valor do input e retira os espaços de inicio ou final

    if (!taskName) {
      // Impede que salve tarefa sem nada digitado
      alert("Digite o nome da tarefa");
      return;
    }

    const newTask = new TaskModel(
      Math.random().toString(),
      taskName,
      state.config[nextCycleType],
      new Date(),
      null,
      null,
      nextCycleType
    );

    const secondsRemaining = newTask.durationInMinutes * 60; // Converte em segundos

    setState((prevState) => {
      return {
        ...prevState,
        activeTask: newTask,
        currentCycle: nextCycle, // Conferir depois
        secondsRemaining: secondsRemaining,
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
        config: { ...prevState.config },
      };
    });
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="Tarefa"
          id="input"
          type="text"
          placeholder="Digite uma tarefa..."
          // value={taskName}
          // onChange={(e) => setTaskName(e.target.value)}
          ref={taskNameInput}
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25min</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}
