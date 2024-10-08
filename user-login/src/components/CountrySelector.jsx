import React from 'react';

const countries = [
  { code: '+1', name: 'USA', currency: 'USD', flag: '🇺🇸' },
  { code: '+44', name: 'UK', currency: 'GBP', flag: '🇬🇧' },
  { code: '+34', name: 'Spain', currency: 'EUR', flag: '🇪🇸' },
];

export default function CountrySelector({ onCountryChange }) {
  const handleCountryChange = (e) => {
    const selectedCountry = countries[e.target.value];
    onCountryChange(selectedCountry);
  };

  return (
    <select onChange={handleCountryChange}>
      {countries.map((country, index) => (
        <option key={index} value={index}>
          {country.flag} {country.name} ({country.code})
        </option>
      ))}
    </select>
  );
}
