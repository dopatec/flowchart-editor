import { useSortable } from '@dnd-kit/sortable';
    import { CSS } from '@dnd-kit/utilities';

    export default function TaskCard({ task }) {
      const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition
      } = useSortable({ id: task.id });

      const style = {
        transform: CSS.Transform.toString(transform),
        transition
      };

      return (
        <div
          ref={setNodeRef}
          style={style}
          {...attributes}
          {...listeners}
          className="task-card"
        >
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      );
    }
