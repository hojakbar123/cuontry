import React from 'react';

function CountryCard({ country }) {
  return (
    <div className="card">
      <img
        src={country.flags?.png || 'https://via.placeholder.com/150'}
        alt={country.name.common}
      />
      <h3>{country.name.common}</h3>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Capital:</strong> {country.capital?.[0] || 'N/A'}</p>
    </div>
  );
}

export default CountryCard;
