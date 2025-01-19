import { motion } from 'framer-motion';
    import { Link } from 'react-router-dom';
    import { FaHome, FaChartLine, FaEdit, FaSignInAlt } from 'react-icons/fa';

    const navItems = [
      { path: '/', icon: <FaHome />, text: 'Home' },
      { path: '/auth', icon: <FaSignInAlt />, text: 'Auth' },
      { path: '/dashboard', icon: <FaChartLine />, text: 'Dashboard' },
      { path: '/editor', icon: <FaEdit />, text: 'Editor' }
    ];

    export default function Navbar() {
      return (
        <motion.nav 
          className="navbar"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="nav-container">
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Link to={item.path} className="nav-link">
                  {item.icon}
                  <span>{item.text}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.nav>
      );
    }
