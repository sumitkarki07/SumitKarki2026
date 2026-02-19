// Admin Context for managing portfolio data
import { createContext, useContext, useState, useEffect } from 'react';
import { personalInfo, about, experience, leadership, projects, skills, awards } from './portfolioData';

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within AdminProvider');
  }
  return context;
};

// Transform skills object to array format for easier editing
const transformSkillsToArray = (skillsObj) => {
  if (Array.isArray(skillsObj)) return skillsObj; // Already in array format
  if (skillsObj.categories) return skillsObj; // Already transformed
  
  // Transform object format to array format
  return {
    categories: Object.entries(skillsObj).map(([key, value]) => ({
      name: value.title,
      items: value.items.map(item => typeof item === 'string' ? item : item.name)
    }))
  };
};

// Transform array format back to object format for display
const transformSkillsToObject = (skillsData) => {
  if (!skillsData.categories) return skillsData;
  
  const result = {};
  const keys = ['languages', 'frameworks', 'tools', 'databases', 'competencies'];
  
  skillsData.categories.forEach((cat, index) => {
    const key = keys[index] || `category${index}`;
    result[key] = {
      title: cat.name,
      icon: "FaCode",
      color: "cyan",
      items: cat.items.map(item => ({ name: item, color: "blue" }))
    };
  });
  
  return result;
};

export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [portfolioData, setPortfolioData] = useState({
    personalInfo: personalInfo,
    about: about,
    experience: experience,
    leadership: leadership,
    projects: projects,
    skills: transformSkillsToArray(skills),
    awards: awards
  });

  // Load data from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem('portfolioData');
    const authStatus = localStorage.getItem('adminAuth');
    
    if (savedData) {
      try {
        const parsed = JSON.parse(savedData);
        // Ensure skills is in the right format
        if (parsed.skills) {
          parsed.skills = transformSkillsToArray(parsed.skills);
        }
        setPortfolioData(parsed);
      } catch (error) {
        console.error('Failed to parse saved data:', error);
      }
    }
    
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Save data to localStorage whenever it changes
  const saveData = (newData) => {
    setPortfolioData(newData);
    localStorage.setItem('portfolioData', JSON.stringify(newData));
  };

  // Authentication functions
  const login = (password) => {
    // Check password from environment variable or default
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';
    
    if (password === adminPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
  };

  // Update functions for each section
  const updatePersonalInfo = (data) => {
    const newData = { ...portfolioData, personalInfo: data };
    saveData(newData);
  };

  const updateAbout = (data) => {
    const newData = { ...portfolioData, about: data };
    saveData(newData);
  };

  const updateExperience = (data) => {
    const newData = { ...portfolioData, experience: data };
    saveData(newData);
  };

  const updateLeadership = (data) => {
    const newData = { ...portfolioData, leadership: data };
    saveData(newData);
  };

  const updateProjects = (data) => {
    const newData = { ...portfolioData, projects: data };
    saveData(newData);
  };

  const updateSkills = (data) => {
    const newData = { ...portfolioData, skills: data };
    saveData(newData);
  };

  const updateAwards = (data) => {
    const newData = { ...portfolioData, awards: data };
    saveData(newData);
  };

  // Reset to default data
  const resetToDefault = () => {
    const defaultData = {
      personalInfo: personalInfo,
      about: about,
      experience: experience,
      leadership: leadership,
      projects: projects,
      skills: transformSkillsToArray(skills),
      awards: awards
    };
    saveData(defaultData);
  };

  // Get skills in object format for display components
  const getSkillsForDisplay = () => {
    return transformSkillsToObject(portfolioData.skills);
  };

  const value = {
    isAuthenticated,
    portfolioData,
    login,
    logout,
    updatePersonalInfo,
    updateAbout,
    updateExperience,
    updateLeadership,
    updateProjects,
    updateSkills,
    updateAwards,
    resetToDefault,
    getSkillsForDisplay
  };

  return <AdminContext.Provider value={value}>{children}</AdminContext.Provider>;
};
