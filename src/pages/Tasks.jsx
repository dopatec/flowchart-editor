import { useState } from 'react';
    import { DndContext, closestCenter } from '@dnd-kit/core';
    import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
    import { FaPlus } from 'react-icons/fa';
    import TaskColumn from '../components/TaskColumn';

    const initialTasks = {
      todo: [
        { id: '1', title: 'Design new flowchart', description: 'Create wireframes for the editor' },
        { id: '2', title: 'Research UI libraries', description: 'Explore animation libraries' }
      ],
      inProgress: [
        { id: '3', title: 'Implement dark theme', description: 'Add theme toggle functionality' }
      ],
      done: [
        { id: '4', title: 'Setup project structure', description: 'Initialize React app with Vite' }
      ]
    };

    export default function Tasks() {
      const [tasks, setTasks] = useState(initialTasks);
      const [newTask, setNewTask] = useState({ title: '', description: '' });

      const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id === over.id) return;

        const activeContainer = active.data.current.sortable.containerId;
        const overContainer = over.data.current.sortable.containerId;

        if (activeContainer === overContainer) {
          setTasks((tasks) => ({
            ...tasks,
            [activeContainer]: arrayMove(
              tasks[activeContainer],
              active.data.current.sortable.index,
              over.data.current.sortable.index
            )
          }));
        } else {
          setTasks((tasks) => {
            const activeItems = tasks[activeContainer];
            const overItems = tasks[overContainer];
            const activeIndex = active.data.current.sortable.index;
            const overIndex = over.data.current.sortable.index;
            const [removed] = activeItems.splice(activeIndex, 1);
            overItems.splice(overIndex, 0, removed);

            return {
              ...tasks,
              [activeContainer]: [...activeItems],
              [overContainer]: [...overItems]
            };
          });
        }
      };

      const addTask = (e) => {
        e.preventDefault();
        if (!newTask.title.trim()) return;

        const task = {
          id: Date.now().toString(),
          title: newTask.title,
          description: newTask.description
        };

        setTasks((tasks) => ({
          ...tasks,
          todo: [task, ...tasks.todo]
        }));

        setNewTask({ title: '', description: '' });
      };

      return (
        <div className="tasks-page">
          <h1>Task Tracker</h1>
          
          <form onSubmit={addTask} className="task-form">
            <input
              type="text"
              placeholder="Task title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              required
            />
            <textarea
              placeholder="Task description"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
            <button type="submit">
              <FaPlus /> Add Task
            </button>
          </form>

          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <div className="task-board">
              <SortableContext items={tasks.todo} strategy={verticalListSortingStrategy}>
                <TaskColumn title="To Do" tasks={tasks.todo} id="todo" />
              </SortableContext>

              <SortableContext items={tasks.inProgress} strategy={verticalListSortingStrategy}>
                <TaskColumn title="In Progress" tasks={tasks.inProgress} id="inProgress" />
              </SortableContext>

              <SortableContext items={tasks.done} strategy={verticalListSortingStrategy}>
                <TaskColumn title="Done" tasks={tasks.done} id="done" />
              </SortableContext>
            </div>
          </DndContext>
        </div>
      );
    }
