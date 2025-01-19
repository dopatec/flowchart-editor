import { motion } from 'framer-motion';
    import ReactFlow, {
      addEdge,
      Background,
      Controls,
      MiniMap,
      useNodesState,
      useEdgesState,
    } from 'reactflow';
    import 'reactflow/dist/style.css';
    import { useCallback } from 'react';

    const initialNodes = [
      {
        id: '1',
        type: 'input',
        data: { label: 'Start' },
        position: { x: 250, y: 25 },
      },
      {
        id: '2',
        data: { label: 'Process' },
        position: { x: 250, y: 125 },
      },
      {
        id: '3',
        data: { label: 'Decision' },
        position: { x: 250, y: 250 },
      },
      {
        id: '4',
        data: { label: 'End' },
        position: { x: 250, y: 375 },
      },
    ];

    const initialEdges = [
      { id: 'e1-2', source: '1', target: '2' },
      { id: 'e2-3', source: '2', target: '3' },
      { id: 'e3-4', source: '3', target: '4' },
    ];

    export default function Editor() {
      const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
      const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

      const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(params, eds)),
        [setEdges]
      );

      return (
        <motion.div 
          style={{ width: '100vw', height: '100vh' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            fitView
          >
            <Background />
            <Controls />
            <MiniMap />
          </ReactFlow>
        </motion.div>
      );
    }
