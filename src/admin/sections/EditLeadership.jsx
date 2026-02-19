import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSave, FaPlus, FaTrash } from 'react-icons/fa';
import { useAdmin } from '../../data/AdminContext';

const EditLeadership = () => {
  const { portfolioData, updateLeadership } = useAdmin();
  const [formData, setFormData] = useState(portfolioData.leadership);
  const [saved, setSaved] = useState(false);

  const handleChange = (index, field, value) => {
    const newData = [...formData];
    newData[index] = { ...newData[index], [field]: value };
    setFormData(newData);
  };

  const handleAchievementChange = (leadIndex, achIndex, value) => {
    const newData = [...formData];
    newData[leadIndex].achievements[achIndex] = value;
    setFormData(newData);
  };

  const addLeadership = () => {
    setFormData([...formData, {
      title: '',
      organization: '',
      duration: '',
      color: 'cyan',
      achievements: ['']
    }]);
  };

  const removeLeadership = (index) => {
    if (window.confirm('Are you sure you want to remove this leadership role?')) {
      setFormData(formData.filter((_, i) => i !== index));
    }
  };

  const addAchievement = (leadIndex) => {
    const newData = [...formData];
    newData[leadIndex].achievements.push('');
    setFormData(newData);
  };

  const removeAchievement = (leadIndex, achIndex) => {
    const newData = [...formData];
    newData[leadIndex].achievements = newData[leadIndex].achievements.filter((_, i) => i !== achIndex);
    setFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLeadership(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Leadership & Activities</h2>
          <p className="text-gray-400">Manage your leadership roles and activities</p>
        </div>
        <button onClick={addLeadership} type="button" className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors flex items-center gap-2">
          <FaPlus /> Add Leadership
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <AnimatePresence>
          {formData.map((item, leadIndex) => (
            <motion.div key={leadIndex} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-slate-900/30 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Leadership {leadIndex + 1}</h3>
                {formData.length > 1 && (
                  <button onClick={() => removeLeadership(leadIndex)} type="button" className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded text-sm flex items-center gap-2">
                    <FaTrash /> Remove
                  </button>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Title</label>
                  <input type="text" value={item.title} onChange={(e) => handleChange(leadIndex, 'title', e.target.value)} className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Organization</label>
                  <input type="text" value={item.organization} onChange={(e) => handleChange(leadIndex, 'organization', e.target.value)} className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Duration</label>
                  <input type="text" value={item.duration} onChange={(e) => handleChange(leadIndex, 'duration', e.target.value)} placeholder="e.g., Nov 2025 - Present" className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Color Theme</label>
                  <select value={item.color} onChange={(e) => handleChange(leadIndex, 'color', e.target.value)} className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors">
                    <option value="cyan">Cyan</option>
                    <option value="purple">Purple</option>
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-300">Achievements</label>
                  <button onClick={() => addAchievement(leadIndex)} type="button" className="text-xs px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded flex items-center gap-1">
                    <FaPlus /> Add
                  </button>
                </div>
                {item.achievements.map((achievement, achIndex) => (
                  <div key={achIndex} className="flex gap-2">
                    <input type="text" value={achievement} onChange={(e) => handleAchievementChange(leadIndex, achIndex, e.target.value)} placeholder="Describe an achievement..." className="flex-1 px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm" required />
                    {item.achievements.length > 1 && (
                      <button onClick={() => removeAchievement(leadIndex, achIndex)} type="button" className="px-3 py-2 bg-red-600 hover:bg-red-500 text-white rounded">
                        <FaTrash />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <div className="flex items-center gap-4 pt-4">
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

export default EditLeadership;
