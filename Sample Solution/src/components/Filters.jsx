import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getAllContacts } from '../api';
import ContactCard from './ContactCard';

export default function Filters({ filterType }) {
  const { gender } = useParams();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const all = await getAllContacts();
      let filtered = all || [];

      if (filterType === 'state') {
        filtered = filtered.filter(c => c.address && c.address.includes('Indiana'));
      } else if (filterType === 'gender' && gender) {
        filtered = filtered.filter(c => c.gender === gender);
      }

      setList(filtered);
      setLoading(false);
    }
    load();
  }, [filterType, gender]);

  async function handleDelete(id) {
    // reuse same delete logic as ContactList
    if (!window.confirm(`Delete contact ID ${id}?`)) return;
    await fetch(`http://localhost:3001/contacts/${id}`, { method: 'DELETE' });
    setList(prev => prev.filter(c => c.id !== id));
  }

  if (loading) return <div>Loading...</div>;
  if (list.length === 0) return <div>No contacts found.</div>;

  return (
    <div>
      <h2>
        {filterType === 'state' ? 'Contacts in Indiana' : `Gender: ${gender}`}
      </h2>
      {list.map(c => <ContactCard key={c.id} contact={c} onDelete={handleDelete} />)}
    </div>
  );
}