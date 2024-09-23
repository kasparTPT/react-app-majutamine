import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedText(text);
    setText('');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Lihtne Teksti Rakendus</h1>
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Sisesta oma tekst siia..."
          style={{ padding: '10px', width: '80%', marginRight: '10px' }}
        />
        <button type="submit" style={{ padding: '10px' }}>Sisesta</button>
      </form>

      {submittedText && (
        <div style={{ marginTop: '20px', fontSize: '1.5rem' }}>
          <strong>Sa kirjutasid: </strong> {submittedText}
        </div>
      )}
    </div>
  );
}

export default App;
