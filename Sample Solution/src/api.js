const API_BASE = 'http://localhost:3001';

export async function getAllContacts() {
  try {
    const res = await fetch(`${API_BASE}/contacts`);
    if (!res.ok) throw new Error('Failed to fetch contacts');
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function getContactById(id) {
  try {
    const res = await fetch(`${API_BASE}/contacts/${id}`);
    if (res.status === 404) return null;
    if (!res.ok) throw new Error('Failed to fetch contact');
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

export async function deleteContact(id) {
  try {
    const res = await fetch(`${API_BASE}/contacts/${id}`, {
      method: 'DELETE'
    });
    return res.ok;
  } catch (err) {
    console.error(err);
    return false;
  }
}