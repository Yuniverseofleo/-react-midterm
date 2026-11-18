import { useState } from 'react';
import { add } from './calculator';

function App() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    if (firstNumber.trim() === '' || secondNumber.trim() === '') {
      setResult('Please enter both numbers.');
      return;
    }

    setResult(add(firstNumber, secondNumber));
  };

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#f1eaff',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '16px',
        width: '320px',
        textAlign: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
      }}>
        <h1>React Calculator</h1>

        <input
          type="number"
          placeholder="First number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Second number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
          style={inputStyle}
        />

        <button onClick={handleAdd} style={buttonStyle}>
          Add Numbers
        </button>

        {result !== null && (
          <h2>Result: {result}</h2>
        )}
      </div>
    </main>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  marginBottom: '15px',
  boxSizing: 'border-box',
  border: '1px solid #ccc',
  borderRadius: '8px',
  fontSize: '16px'
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  background: '#7046b8',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontSize: '16px'
};

export default App;