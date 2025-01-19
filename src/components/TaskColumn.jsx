import { useSortable } from '@dnd-kit/sortable';
    import { CSS } from '@dnd-kit/utilities';
    import TaskCard from './TaskCard';

    export default function TaskColumn({ title, tasks, id }) {
      return (
        <div className="task-column">
          <h2>{title} ({tasks.length})</h2>
          <div className="task-list">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        </div>
      );
    }
