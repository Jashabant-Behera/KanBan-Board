import React, { useState, useEffect } from 'react'; // Import React and hooks

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark'; // Set initial state based on saved preference
  });

  // Effect to apply theme class to the body element
  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light'); // Save preference to local storage
  }, [isDarkMode]); // Run effect when isDarkMode changes

  return (
    <button
      className='theme-toggle-btn'
      onClick={() => setIsDarkMode(prevMode => !prevMode)} // Toggle theme
    >
      {isDarkMode ? '🌙' : '🌞'} {/* Display moon or sun emoji based on theme */}
    </button>
  );
};

export default ThemeToggle; // Export ThemeToggle component
