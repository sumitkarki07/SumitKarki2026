import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSave, FaPlus, FaTrash } from 'react-icons/fa';
import { useAdmin } from '../../data/AdminContext';

const EditProjects = () => {
  const { portfolioData, updateProjects } = useAdmin();
  const [formData, setFormData] = useState(portfolioData.projects);
  const [saved, setSaved] = useState(false);

  const handleChange = (index, field, value) => {
    const newData = [...formData];
    newData[index] = { ...newData[index], [field]: value };
    setFormData(newData);
  };

  const handleArrayChange = (projIndex, field, arrIndex, value) => {
    const newData = [...formData];
    if (field === 'techStack' || field === 'highlights') {
      newData[projIndex][field][arrIndex] = value;
    }
    setFormData(newData);
  };

  const addProject = () => {
    setFormData([...formData, {
      title: '',
      badge: '',
      badgeColor: 'cyan',
      description: '',
      techStack: [''],
      highlights: [''],
      github: '',
      accentColor: 'cyan'
    }]);
  };

  const removeProject = (index) => {
    if (window.confirm('Are you sure you want to remove this project?')) {
      setFormData(formData.filter((_, i) => i !== index));
    }
  };

  const addArrayItem = (projIndex, field) => {
    const newData = [...formData];
    newData[projIndex][field].push('');
    setFormData(newData);
  };

  const removeArrayItem = (projIndex, field, arrIndex) => {
    const newData = [...formData];
    newData[projIndex][field] = newData[projIndex][field].filter((_, i) => i !== arrIndex);
    setFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProjects(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Projects</h2>
          <p className="text-gray-400">Manage your portfolio projects</p>
        </div>
        <button onClick={addProject} type="button" className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors flex items-center gap-2">
          <FaPlus /> Add Project
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
        <AnimatePresence>
          {formData.map((project, projIndex) => (
            <motion.div key={projIndex} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-slate-900/30 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Project {projIndex + 1}</h3>
                {formData.length > 1 && (
                  <button onClick={() => removeProject(projIndex)} type="button" className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded text-sm flex items-center gap-2">
                    <FaTrash /> Remove
                  </button>
                )}
              </div>

              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Project Title</label>
                    <input type="text" value={project.title} onChange={(e) => handleChange(projIndex, 'title', e.target.value)} className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Badge (optional)</label>
                    <input type="text" value={project.badge || ''} onChange={(e) => handleChange(projIndex, 'badge', e.target.value)} placeholder="e.g., NASA, JPMorgan" className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                  <textarea value={project.description} onChange={(e) => handleChange(projIndex, 'description', e.target.value)} rows={2} className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" required />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Badge Color</label>
                    <select value={project.badgeColor || 'cyan'} onChange={(e) => handleChange(projIndex, 'badgeColor', e.target.value)} className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors">
                      <option value="cyan">Cyan</option>
                      <option value="blue">Blue</option>
                      <option value="purple">Purple</option>
                      <option value="green">Green</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Accent Color</label>
                    <select value={project.accentColor || 'cyan'} onChange={(e) => handleChange(projIndex, 'accentColor', e.target.value)} className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors">
                      <option value="cyan">Cyan</option>
                      <option value="blue">Blue</option>
                      <option value="purple">Purple</option>
                      <option value="green">Green</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">GitHub URL</label>
                  <input type="url" value={project.github} onChange={(e) => handleChange(projIndex, 'github', e.target.value)} className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-300">Tech Stack</label>
                    <button onClick={() => addArrayItem(projIndex, 'techStack')} type="button" className="text-xs px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded flex items-center gap-1">
                      <FaPlus /> Add
                    </button>
                  </div>
                  {project.techStack.map((tech, techIndex) => (
                    <div key={techIndex} className="flex gap-2">
                      <input type="text" value={tech} onChange={(e) => handleArrayChange(projIndex, 'techStack', techIndex, e.target.value)} placeholder="Technology name" className="flex-1 px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm" required />
                      {project.techStack.length > 1 && (
                        <button onClick={() => removeArrayItem(projIndex, 'techStack', techIndex)} type="button" className="px-3 py-2 bg-red-600 hover:bg-red-500 text-white rounded"><FaTrash /></button>
                      )}
                    </div>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-300">Highlights</label>
                    <button onClick={() => addArrayItem(projIndex, 'highlights')} type="button" className="text-xs px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded flex items-center gap-1">
                      <FaPlus /> Add
                    </button>
                  </div>
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex gap-2">
                      <input type="text" value={highlight} onChange={(e) => handleArrayChange(projIndex, 'highlights', highlightIndex, e.target.value)} placeholder="Project highlight" className="flex-1 px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm" required />
                      {project.highlights.length > 1 && (
                        <button onClick={() => removeArrayItem(projIndex, 'highlights', highlightIndex)} type="button" className="px-3 py-2 bg-red-600 hover:bg-red-500 text-white rounded"><FaTrash /></button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="flex items-center gap-4 pt-4 sticky bottom-0 bg-slate-800/50 backdrop-blur py-4">
          <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2">
            <FaSave /> Save All Changes
          </motion.button>
          {saved && (
            <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-green-400 text-sm flex items-center gap-2">
              ✓ Saved successfully!
            </motion.span>
          )}
        </div>
      </form>
    </motion.div>
  );
};

export default EditProjects;
