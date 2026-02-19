import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSave, FaPlus, FaTrash } from 'react-icons/fa';
import { useAdmin } from '../../data/AdminContext';

const EditSkills = () => {
  const { portfolioData, updateSkills } = useAdmin();
  const [formData, setFormData] = useState(portfolioData.skills);
  const [saved, setSaved] = useState(false);

  const handleCategoryChange = (catIndex, field, value) => {
    const newData = { ...formData };
    newData.categories[catIndex][field] = value;
    setFormData(newData);
  };

  const handleSkillChange = (catIndex, skillIndex, value) => {
    const newData = { ...formData };
    newData.categories[catIndex].items[skillIndex] = value;
    setFormData(newData);
  };

  const addSkillToCategory = (catIndex) => {
    const newData = { ...formData };
    newData.categories[catIndex].items.push('');
    setFormData(newData);
  };

  const removeSkillFromCategory = (catIndex, skillIndex) => {
    const newData = { ...formData };
    newData.categories[catIndex].items = newData.categories[catIndex].items.filter((_, i) => i !== skillIndex);
    setFormData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSkills(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">Skills & Technologies</h2>
        <p className="text-gray-400">Manage your technical skills by category</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-h-[600px] overflow-y-auto pr-2">
        {formData.categories.map((category, catIndex) => (
          <div key={catIndex} className="bg-slate-900/30 rounded-lg p-6 border border-slate-700">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">Category Name</label>
              <input type="text" value={category.name} onChange={(e) => handleCategoryChange(catIndex, 'name', e.target.value)} className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors" required />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-gray-300">Skills</label>
                <button onClick={() => addSkillToCategory(catIndex)} type="button" className="text-xs px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded flex items-center gap-1">
                  <FaPlus /> Add Skill
                </button>
              </div>
              {category.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex gap-2">
                  <input type="text" value={skill} onChange={(e) => handleSkillChange(catIndex, skillIndex, e.target.value)} placeholder="Skill name" className="flex-1 px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm" required />
                  {category.items.length > 1 && (
                    <button onClick={() => removeSkillFromCategory(catIndex, skillIndex)} type="button" className="px-3 py-2 bg-red-600 hover:bg-red-500 text-white rounded">
                      <FaTrash />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

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

export default EditSkills;
