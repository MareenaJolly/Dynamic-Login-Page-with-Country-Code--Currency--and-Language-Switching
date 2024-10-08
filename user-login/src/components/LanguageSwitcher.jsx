// components/LanguageSwitcher.js
import React from 'react';

export default function LanguageSwitcher({ onLanguageChange }) {
  const handleLanguageChange = (e) => {
    onLanguageChange(e.target.value);
  };

  return (
    <select onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
    </select>
  );
}
