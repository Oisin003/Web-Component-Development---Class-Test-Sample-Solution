import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import SearchById from './components/SearchById';
import Filters from './components/Filters';
import styles from './styles/App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Contacts Directory</h1>
        <nav className={styles.nav}>
          <Link to="/">All Contacts</Link>
          <Link to="/search">Search by ID</Link>
          <Link to="/indiana">Indiana</Link>
          <Link to="/gender/female">Female</Link>
          <Link to="/gender/male">Male</Link>
        </nav>
      </header>

      <main className={styles.container}>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/search" element={<SearchById />} />
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route path="/indiana" element={<Filters filterType="state" />} />
          <Route path="/gender/:gender" element={<Filters filterType="gender" />} />
        </Routes>
      </main>
    </div>
  );
}