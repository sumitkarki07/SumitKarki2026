import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSave } from 'react-icons/fa';
import { useAdmin } from '../../data/AdminContext';

const EditAbout = () => {
  const { portfolioData, updateAbout } = useAdmin();
  const [formData, setFormData] = useState(portfolioData.about);
  const [saved, setSaved] = useState(false);

  const handleChange = (e, index) => {
    const newParagraphs = [...formData.paragraphs];
    newParagraphs[index] = e.target.value;
    setFormData({
      ...formData,
      paragraphs: newParagraphs
    });
  };

  const handleStatChange = (field, value, index) => {
    const newStats = [...formData.stats];
    newStats[index] = {
      ...newStats[index],
      [field]: value
    };
    setFormData({
      ...formData,
      stats: newStats
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateAbout(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white mb-2">About Me</h2>
        <p className="text-gray-400">Update your about section and statistics</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Paragraphs */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">About Paragraphs</h3>
          {formData.paragraphs.map((paragraph, index) => (
            <div key={index}>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Paragraph {index + 1}
              </label>
              <textarea
                value={paragraph}
                onChange={(e) => handleChange(e, index)}
                rows={3}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                required
              />
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Statistics</h3>
          {formData.stats.map((stat, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-4 p-4 bg-slate-900/30 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Number</label>
                <input
                  type="text"
                  value={stat.number}
                  onChange={(e) => handleStatChange('number', e.target.value, index)}
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Label</label>
                <input
                  type="text"
                  value={stat.label}
                  onChange={(e) => handleStatChange('label', e.target.value, index)}
                  className="w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                  required
                />
              </div>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className="flex items-center gap-4 pt-4">
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
          >
            <FaSave /> Save Changes
          </motion.button>

          {saved && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              className="text-green-400 text-sm flex items-center gap-2"
            >
              ✓ Saved successfully!
            </motion.span>
          )}
        </div>
      </form>
    </motion.div>
  );
};

export default EditAbout;
