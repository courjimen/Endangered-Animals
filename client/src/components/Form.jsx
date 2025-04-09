import React from 'react';

function Form({ newSighting, individuals, handleInputChange, handleSubmit }) {
  return (
    <form role='form' onSubmit={handleSubmit}>
      <h2>Add New Sighting</h2>
      <label>Date/Time:</label>
      <input type="datetime-local" name="sighting_datetime" value={newSighting.sighting_datetime} onChange={handleInputChange} required />

      <label>Animal Name:</label>
      <select name="animal_nickname" value={newSighting.animal_nickname} onChange={handleInputChange} required>
        <option value="">Select Animal</option>
        {individuals.map((individual) => (
          <option key={individual.individual_animal_id} value={individual.nickname}>
            {individual.nickname}
          </option>
        ))}
      </select>

      <label>Location:</label>
      <input type="text" name="location" value={newSighting.location} onChange={handleInputChange} />

      <label>Healthy:</label>
      <select name="healthy" value={newSighting.healthy} onChange={handleInputChange}>
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>

      <label>Email:</label>
      <input type="email" name="sighter_email" value={newSighting.sighter_email} onChange={handleInputChange} required/>

      <br/>
      <button type="submit">Add Sighting</button>
    </form>
  );
}

export default Form;