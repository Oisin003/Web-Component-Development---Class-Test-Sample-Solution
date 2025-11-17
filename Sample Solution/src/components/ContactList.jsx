import React, { useEffect, useState } from 'react';
import ContactCard from './ContactCard';
import styles from './ContactCard.module.css';
import { getAllContacts, deleteContact } from '../api';

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [genderFilter, setGenderFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  async function fetchContacts() {
    setLoading(true);
    const data = await getAllContacts();
    setContacts(data || []);
    setLoading(false);
  }

  useEffect(() => {
    fetchContacts();
  }, []);

  function handleSortToggle() {
    setSortAsc(prev => !prev);
  }

  function handleGenderChange(e) {
    setGenderFilter(e.target.value);
  }

  async function handleDelete(id) {
    if (!window.confirm(`Delete contact ID ${id}?`)) return;
    await deleteContact(id);
    setContacts(prev => prev.filter(c => c.id !== id));
  }

  const filtered = contacts
    .filter(c => (genderFilter === 'all' ? true : c.gender === genderFilter))
    .sort((a, b) => (sortAsc ? a.age - b.age : b.age - a.age));

  return (
    <div>
      <div style={{ marginBottom: 12 }}>
        <button onClick={handleSortToggle}>
          Sort by age: {sortAsc ? 'Ascending' : 'Descending'}
        </button>
        <select value={genderFilter} onChange={handleGenderChange} style={{ marginLeft: 8 }}>
          <option value="all">All genders</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>

      {loading ? <div>Loading...</div> : null}

      {filtered.map(c => (
        <ContactCard key={c.id} contact={c} onDelete={handleDelete} />
      ))}
    </div>
  );
}