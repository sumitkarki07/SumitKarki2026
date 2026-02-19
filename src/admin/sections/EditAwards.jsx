import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSave, FaPlus, FaTrash } from 'react-icons/fa';
import { useAdmin } from '../../data/AdminContext';

const EditAwards = () => {
  const { portfolioData, updateAwards } = useAdmin();
  const [formData, setFormData] = useState(portfolioData.awards);
  const [saved, setSaved] = useState(false);

  const handleChange = (index, field, value) => {
    const newData = [...formData];
    newData[index] = { ...newData[index], [field]: value };
    setFormData(newData);
  };

  const addAward = () => {
    setFormData([...formData, {
      title: '',
      issuer: '',
      year: '',
      description: ''
    }]);
  };

  const removeAward = (index) => {
    if (window.confirm('Are you sure you want to remove this award?')) {
      setFormData(formData.filter((_, i) => i !== index));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAwards(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Honors & Awards</h2>
          <p className="text-gray-400">Manage your achievements and recognition</p>
        </div>
        <button onClick={addAward} type="button" className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg transition-colors flex items-center gap-2">
          <FaPlus /> Add Award
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <AnimatePresence>
          {formData.map((award, index) => (
            <motion.div key={index} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="bg-slate-900/30 rounded-lg p-6 border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-white">Award {index + 1}</h3>
                {formData.length > 1 && (
                  <button onClick={() => removeAward(index)} type="button" className="px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded text-sm flex items-center gap-2">
                    <FaTrash /> Remove
                  </button>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Award Title</label>
                  <input type="text" value={award.title} onChange={(e) => handleChange(index, 'title', e.target.value)} className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Issuer/Organization</label>
                  <input type="text" value={award.issuer} onChange={(e) => handleChange(index, 'issuer', e.target.value)} className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors" required />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Year</label>
                  <input type="text" value={award.year} onChange={(e) => handleChange(index, 'year', e.target.value)} placeholder="e.g., 2024" className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors" required />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                  <textarea value={award.description} onChange={(e) => handleChange(index, 'description', e.target.value)} rows={2} className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none" required />
                </div>
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

export default EditAwards;
