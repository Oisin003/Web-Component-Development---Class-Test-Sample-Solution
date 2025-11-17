import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ContactCard.module.css';

export default function ContactCard({ contact, onDelete }) {
  const navigate = useNavigate();
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.title}>{contact.name} (ID: {contact.id})</div>
        <div className={styles.meta}>
          Age: {contact.age} • Company: {contact.company}
        </div>
        <div className={styles.friends}>
          Friends: {contact.friends && contact.friends.map(f => f.name).join(', ')}
        </div>
      </div>
      <div className={styles.actions}>
        <button className={`${styles.btn} ${styles.viewBtn}`} onClick={() => navigate(`/contact/${contact.id}`)}>
          View
        </button>
        <button
          className={`${styles.btn} ${styles.deleteBtn}`}
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}