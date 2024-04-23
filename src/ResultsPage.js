import React from 'react';

const ResultsPage = ({ predictedDisease, recommendedDoctors }) => {
  const [sortOption, setSortOption] = useState('rating');
  const [sortOrder, setSortOrder] = useState('desc');

  const sortedDoctors = recommendedDoctors.sort((a, b) => {
    if (sortOption === 'rating') {
      return sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating;
    }
    // Add more sorting options here
  });

  return (
    <div>
      <h2>Predicted Disease</h2>
      <p>{predictedDisease}</p>

      <div>
        <label htmlFor="sortOption">Sort by:</label>
        <select id="sortOption" value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="rating">Rating</option>
          {/* Add more sorting options here */}
        </select>
        <label htmlFor="sortOrder">Order:</label>
        <select id="sortOrder" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <h2>Recommended Doctors</h2>
      {recommendedDoctors.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Specialty</th>
              <th>Rating</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {sortedDoctors.map((doctor, index) => (
              <tr key={index}>
                <td>{doctor.name}</td>
                <td>{doctor.specialty}</td>
                <td>{doctor.rating}</td>
                <td>{doctor.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No recommended doctors found.</p>
      )}
    </div>
  );
};

export default ResultsPage;