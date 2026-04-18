import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../services/api';
import Navbar from '../components/Navbar';

function Home() {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    API.get('/restaurants')
      .then((res) => setRestaurants(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="grid">
        {restaurants.map((r) => (
          <div
            key={r.id}
            className="card"
            onClick={() => navigate(`/menu/${r.id}`)}
          >
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="restaurant"
          />

            <div className="card-body">
              <h3>{r.name}</h3>
              <p>{r.location}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;