import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ names: '', telephone: '', image: '' });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get('https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project', newContact);
      setNewContact({ names: '', telephone: '', image: '' });
      fetchContacts();
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };

  return (
    <div>
      <h1>Agenda Telefónica</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="names"
          placeholder="Nombres"
          value={newContact.names}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="telephone"
          placeholder="Teléfono"
          value={newContact.telephone}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="image"
          placeholder="URL de imagen"
          value={newContact.image}
          onChange={handleInputChange}
        />
        <button type="submit">Agregar Contacto</button>
      </form>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.identify}>
            <img src={contact.image} alt={contact.names} />
            <p>{contact.names}</p>
            <p>{contact.telephone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;