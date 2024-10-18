import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://ThreadBackend.onrender.com/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div>
      <h1>Thread Detection Website</h1>
      <p>{data ? data.message : 'Loading...'}</p>
    </div>
  );
}

export default App;
