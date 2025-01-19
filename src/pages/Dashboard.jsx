import { motion } from 'framer-motion';
    import { FaPlus, FaProjectDiagram, FaUsers } from 'react-icons/fa';

    const projects = [
      { id: 1, name: "Project A", description: "Marketing Workflow" },
      { id: 2, name: "Project B", description: "Sales Process" },
      { id: 3, name: "Project C", description: "Customer Support Flow" }
    ];

    export default function Dashboard() {
      return (
        <motion.div 
          className="page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Dashboard</h1>
          <div className="dashboard-grid">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <button>Open Editor</button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );
    }
