import { BrowserRouter, Routes, Route } from 'react-router-dom';
    import { AnimatePresence } from 'framer-motion';
    import Navbar from './components/Navbar';
    import ThemeToggle from './components/ThemeToggle';
    import Landing from './pages/Landing';
    import Auth from './pages/Auth';
    import Onboarding from './pages/Onboarding';
    import Dashboard from './pages/Dashboard';
    import Editor from './pages/Editor';
    import Tasks from './pages/Tasks';

    export default function App() {
      return (
        <BrowserRouter>
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/tasks" element={<Tasks />} />
            </Routes>
          </AnimatePresence>
          <ThemeToggle />
        </BrowserRouter>
      );
    }
