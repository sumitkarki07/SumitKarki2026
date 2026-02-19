import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUser, FaBriefcase, FaTrophy, FaProjectDiagram, FaCode, FaAward, FaSignOutAlt, FaHome, FaSave, FaUndo } from 'react-icons/fa';
import { useAdmin } from '../data/AdminContext';
import { useNavigate } from 'react-router-dom';

// Import edit components
import EditPersonalInfo from './sections/EditPersonalInfo';
import EditAbout from './sections/EditAbout';
import EditExperience from './sections/EditExperience';
import EditLeadership from './sections/EditLeadership';
import EditProjects from './sections/EditProjects';
import EditSkills from './sections/EditSkills';
import EditAwards from './sections/EditAwards';

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState('personal');
  const { logout, portfolioData, resetToDefault } = useAdmin();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin');
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all data to default? This cannot be undone.')) {
      resetToDefault();
      alert('Data reset to default successfully!');
    }
  };

  const sections = [
    { id: 'personal', name: 'Personal Info', icon: FaUser, component: EditPersonalInfo },
    { id: 'about', name: 'About Me', icon: FaUser, component: EditAbout },
    { id: 'experience', name: 'Experience', icon: FaBriefcase, component: EditExperience },
    { id: 'leadership', name: 'Leadership', icon: FaTrophy, component: EditLeadership },
    { id: 'projects', name: 'Projects', icon: FaProjectDiagram, component: EditProjects },
    { id: 'skills', name: 'Skills', icon: FaCode, component: EditSkills },
    { id: 'awards', name: 'Awards', icon: FaAward, component: EditAwards },
  ];

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Top Bar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-slate-900/80 backdrop-blur border-b border-cyan-500/20 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <FaUser className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Admin Dashboard</h1>
                <p className="text-xs text-gray-400">Manage your portfolio content</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/')}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors flex items-center gap-2 text-sm"
              >
                <FaHome /> View Portfolio
              </button>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-white rounded-lg transition-colors flex items-center gap-2 text-sm"
              >
                <FaUndo /> Reset Data
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white rounded-lg transition-colors flex items-center gap-2 text-sm"
              >
                <FaSignOutAlt /> Logout
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-[250px_1fr] gap-6">
          {/* Sidebar */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="space-y-2"
          >
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-3 mb-4">
              Sections
            </h2>
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <motion.button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  whileHover={{ x: 4 }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeSection === section.id
                      ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-white shadow-lg'
                      : 'bg-slate-800/50 border border-slate-700 text-gray-400 hover:text-white hover:border-cyan-500/30'
                  }`}
                >
                  <Icon className="text-lg" />
                  <span className="font-medium">{section.name}</span>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Main Content Area */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-slate-800/50 backdrop-blur rounded-xl border border-cyan-500/20 p-6 min-h-[600px]"
          >
            <AnimatePresence mode="wait">
              {ActiveComponent && <ActiveComponent key={activeSection} />}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
