import React from 'react';

function Sightings({ sightings }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date/Time</th>
          <th>Individual</th>
          <th>Location</th>
          <th>Healthy</th>
          <th>Sighter Email</th>
        </tr>
      </thead>
      <tbody>
        {sightings.map((sighting) => (
          <tr key={sighting.sighting_number}>
            <td>{sighting.sighting_datetime}</td>
            <td>{sighting.nickname}</td>
            <td>{sighting.location}</td>
            <td>{sighting.healthy ? 'Yes' : 'No'}</td>
            <td>{sighting.sighter_email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Sightings;