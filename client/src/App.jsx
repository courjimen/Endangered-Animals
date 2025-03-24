import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SightingList from './components/Sightings';
import SightingForm from './components/Form';

function App() {
  const [sightings, setSightings] = useState([]);
  const [newSighting, setNewSighting] = useState({
    sighting_datetime: '',
    animal_nickname: '',
    location: '',
    healthy: true,
    sighter_email: '',
  });
  const [individuals, setIndividuals] = useState([]);

  useEffect(() => {
    fetchSightings();
    fetchIndividuals();
  }, []);

  const fetchSightings = async () => {
    try {
      const response = await axios.get('http://localhost:3000/sightings');
      setSightings(response.data);
    } catch (error) {
      console.error('Error fetching sightings:', error);
    }
  };

  const fetchIndividuals = async () => {
    try {
      const response = await axios.get('http://localhost:3000/individuals');
      setIndividuals(response.data);
    } catch (error) {
      console.error('Error fetching individuals:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewSighting({ ...newSighting, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/sightings', newSighting);
      fetchSightings();
      setNewSighting({
        sighting_datetime: '',
        animal_nickname: '',
        location: '',
        healthy: true,
        sighter_email: '',
      });
    } catch (error) {
      console.error('Error adding sighting:', error);
    }
  };

  return (
    <div>
      <h1>Endangered Species Sightings</h1>
      <SightingList sightings={sightings} />
      <h2>Add New Sighting</h2>
      <SightingForm
        newSighting={newSighting}
        individuals={individuals}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;