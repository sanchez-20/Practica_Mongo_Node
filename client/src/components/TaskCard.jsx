import { useTasks } from "../context/TasksContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  return (
    <div className="bg-zinc-800 p-8 rounded-xl border border-zinc-700 hover:border-indigo-500/50 transition-all group flex flex-col justify-between h-full shadow-lg hover:shadow-indigo-500/5">
      <div>
        <header className="flex justify-between items-start mb-4">
          <h1 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors capitalize">
            {task.title}
          </h1>
          <div className="flex gap-x-2">
            <Link
              to={`/task/${task._id}`}
              className="p-2 text-zinc-400 hover:text-indigo-400 hover:bg-zinc-700/50 rounded-md transition-all"
              title="Edit Task"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </Link>
            <button
              className="p-2 text-zinc-400 hover:text-red-400 hover:bg-zinc-700/50 rounded-md transition-all"
              onClick={() => deleteTask(task._id)}
              title="Delete Task"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </header>
        <p className="text-zinc-400 leading-relaxed mb-6 line-clamp-3">
          {task.description}
        </p>
      </div>

      <div className="pt-4 border-t border-zinc-700/50 flex justify-between items-center text-xs text-zinc-500 uppercase tracking-wider font-semibold">
        <span>Created</span>
        <span>{dayjs(task.createdAt).fromNow()}</span>
      </div>
    </div>
  );
}

export default TaskCard;
