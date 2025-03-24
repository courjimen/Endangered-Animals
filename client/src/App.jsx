import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sightings from './components/Sightings';
import Form from './components/Form';

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
  //adding filter for only healthy animals
  const [healthyFilter, setHealthyFilter] = useState(false)

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

  //handle healthy filter
  const handleFilterChange = (e) => {
    setHealthyFilter(e.target.checked);
  };

  const filteredSightings = healthyFilter ? sightings.filter((sighting) => sighting.healthy) : sightings;
  
  return (
    <div>
      <h1>Endangered Species Sightings</h1>
      <Sightings sightings={sightings} />
      <h2>Add New Sighting</h2>
      <Form
        newSighting={newSighting}
        individuals={individuals}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default App;