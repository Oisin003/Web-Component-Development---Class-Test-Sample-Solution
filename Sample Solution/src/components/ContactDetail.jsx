import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getContactById } from '../api';

export default function ContactDetail() {
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const data = await getContactById(id);
      setContact(data || null);
      setLoading(false);
    }
    load();
  }, [id]);

  if (loading) return <div>Loading contact...</div>;
  if (!contact) return <div>Contact not found.</div>;

  return (
    <div style={{ background: 'white', padding: 16, borderRadius: 8 }}>
      <h2>{contact.name} (ID: {contact.id})</h2>
      <p><strong>Age:</strong> {contact.age}</p>
      <p><strong>Gender:</strong> {contact.gender}</p>
      <p><strong>Email:</strong> {contact.email}</p>
      <p><strong>Phone:</strong> {contact.phone}</p>
      <p><strong>Company:</strong> {contact.company}</p>
      <p><strong>Address:</strong> {contact.address}</p>
      <p><strong>Friends:</strong> {contact.friends && contact.friends.map(f => f.name).join(', ')}</p>
    </div>
  );
}