import React, { useState } from 'react';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);
  const [kelvin, setKelvin] = useState(0);

  const convertTemperature = () => {
    const celsiusValue = parseFloat(celsius);
    const fahrenheitValue = (celsiusValue * 9) / 5 + 32;
    const kelvinValue = celsiusValue + 273.15;

    setFahrenheit(fahrenheitValue.toFixed(2));
    setKelvin(kelvinValue.toFixed(2));
  };

  return (
    <div>
      <h1>Temperature Converter</h1>
      <label>
        Celsius:
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(e.target.value)}
        />
      </label>
      <button onClick={convertTemperature}>Convert</button>
      <h2>Fahrenheit: {fahrenheit} °F</h2>
      <h2>Kelvin: {kelvin} K</h2>
    </div>
  );
};

export default TemperatureConverter;
