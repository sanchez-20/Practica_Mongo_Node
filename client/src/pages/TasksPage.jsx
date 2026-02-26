import { useEffect } from "react";
import { useTasks } from "../context/TasksContext";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  return (
    <div className="py-10">
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">My Tasks</h1>
          <p className="text-zinc-400">Manage and track your ongoing projects.</p>
        </div>
        <div className="text-zinc-500 font-medium">
          Total: <span className="text-indigo-400">{tasks.length}</span>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-20 bg-zinc-800/50 rounded-xl border border-dashed border-zinc-700">
          <h1 className="text-2xl font-bold text-zinc-500 mb-2">No tasks yet</h1>
          <p className="text-zinc-600">Click on "Add Task" to get started!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tasks.map((task) => (
            <TaskCard task={task} key={task._id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TasksPage;
