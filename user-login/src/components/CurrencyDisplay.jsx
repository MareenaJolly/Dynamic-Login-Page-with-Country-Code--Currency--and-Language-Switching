// components/CurrencyDisplay.js
import React from 'react';

export default function CurrencyDisplay({ selectedCurrency }) {
  const price = 100; // static price to demonstrate currency switching

  return (
    <div>
      <p>Price: {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: selectedCurrency
        }).format(price)}
      </p>
    </div>
  );
}
