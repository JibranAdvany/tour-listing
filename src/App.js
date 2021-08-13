import { useEffect, useState } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Tours from './components/Tours/Tours';

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const removeTour = id => {
    const newTours = tours.filter(tour => id !== tour.id);
    setTours(newTours);
  };

  useEffect(() => {
    async function fetchData() {
      const results = await fetch('https://course-api.com/react-tours-project');
      const data = await results.json();
      setTours(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <main>
        {loading && <h1 className="loading">Fetching data ...</h1>}
        {!loading && <Tours data={tours} removeTour={removeTour} />}
      </main>
      <Footer />
    </>
  );
}

export default App;
