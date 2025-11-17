import React, { useState } from 'react';
import { getContactById } from '../api';
import { useNavigate } from 'react-router-dom';

export default function SearchById() {
  const [id, setId] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSearch(e) {
    e.preventDefault();
    setError('');
    setResult(null);
    if (!id) {
      setError('Please enter an ID.');
      return;
    }
    const data = await getContactById(id);
    if (!data) {
      setError('Contact not found');
    } else {
      setResult(data);
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch} style={{ marginBottom: 12 }}>
        <input
          placeholder="Enter contact ID"
          value={id}
          onChange={e => setId(e.target.value)}
        />
        <button type="submit" style={{ marginLeft: 8 }}>Search</button>
      </form>

      {error && <div style={{ color: 'red' }}>{error}</div>}

      {result && (
        <div style={{ background: 'white', padding: 12, borderRadius: 6 }}>
          <h3>{result.name} (ID: {result.id})</h3>
          <p><strong>Age:</strong> {result.age}</p>
          <p><strong>Gender:</strong> {result.gender}</p>
          <p><strong>Email:</strong> {result.email}</p>
          <p><strong>Phone:</strong> {result.phone}</p>
          <button onClick={() => navigate(`/contact/${result.id}`)} style={{ marginTop: 8 }}>
            View full details
          </button>
        </div>
      )}
    </div>
  );
}