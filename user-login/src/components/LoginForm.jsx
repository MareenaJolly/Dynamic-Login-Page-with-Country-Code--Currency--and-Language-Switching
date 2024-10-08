import React, { useState, useEffect } from 'react';
import CountrySelector from './CountrySelector';
import CurrencyDisplay from './CurrencyDisplay';
import LanguageSwitcher from './LanguageSwitcher';
import './LoginForm.css'; 

const translations = {
  en: { phone: 'Phone', email: 'Email', password: 'Password', submit: 'Submit' },
  es: { phone: 'Teléfono', email: 'Correo Electrónico', password: 'Contraseña', submit: 'Enviar' },
};

export default function LoginForm() {
  const [selectedCountry, setSelectedCountry] = useState({ code: '+1', currency: 'USD' });
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [formLabels, setFormLabels] = useState(translations['en']);

  useEffect(() => {
    // Set language labels based on selected language
    setFormLabels(translations[selectedLanguage]);

    // Persist country and language in localStorage
    localStorage.setItem('selectedCountry', JSON.stringify(selectedCountry));
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedCountry, selectedLanguage]);

  const handleCountryChange = (country) => setSelectedCountry(country);
  const handleLanguageChange = (language) => setSelectedLanguage(language);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      phone: e.target.phone.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log('Form Data:', formData);
  };

  return (
    <div className="login-form-container">
      <h1>Login</h1>
      <div className="selectors">
        <LanguageSwitcher onLanguageChange={handleLanguageChange} />
        <CountrySelector onCountryChange={handleCountryChange} />
      </div>
      <CurrencyDisplay selectedCurrency={selectedCountry.currency} />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>{formLabels.phone}</label>
          <input type="text" name="phone" placeholder={selectedCountry.code} required />
        </div>
        <div className="form-group">
          <label>{formLabels.email}</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-group">
          <label>{formLabels.password}</label>
          <input type="password" name="password" required />
        </div>
        <button type="submit">{formLabels.submit}</button>
      </form>
    </div>
  );
}
