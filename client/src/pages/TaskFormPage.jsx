import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
      }
    }
    loadTask();
  }, [getTask, params.id, setValue]);

  const onSubmit = handleSubmit((data) => {
    const taskData = {
      ...data,
      date: dayjs.utc(data.date).format(),
    };

    if (params.id) {
      updateTask(params.id, taskData);
    } else {
      createTask(taskData);
    }
    navigate("/tasks");
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-xl shadow-2xl border border-zinc-700">
        <h1 className="text-3xl font-bold mb-8 text-center">
          {params.id ? "Edit Task" : "New Task"}
        </h1>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="block text-zinc-400 text-sm mb-1">
              Title
            </label>
            <input
              type="text"
              placeholder="Give it a title..."
              {...register("title", { required: true })}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-zinc-600"
              autoFocus
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-zinc-400 text-sm mb-1"
            >
              Description
            </label>
            <textarea
              rows="3"
              placeholder="What needs to be done?"
              {...register("description")}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-zinc-600"
            ></textarea>
          </div>

          <div>
            <label htmlFor="date" className="block text-zinc-400 text-sm mb-1">
              Due Date
            </label>
            <input
              type="date"
              {...register("date")}
              className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 border border-zinc-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-500/20 mt-6"
          >
            {params.id ? "Update Task" : "Create Task"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
