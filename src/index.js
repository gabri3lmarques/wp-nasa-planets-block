import { registerBlockType } from '@wordpress/blocks';
import { useState, useEffect } from '@wordpress/element';
import axios from 'axios';
import '../editor.css';

registerBlockType('nasa/planets-block', {
  title: 'NASA Planets',
  icon: 'universal-access-alt',
  category: 'widgets',
  edit: () => {
    const [planet, setPlanet] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchPlanet = async () => {
        try {
          const response = await axios.get(
            `https://api.nasa.gov/planetary/apod?api_key=USE_SUA_API`
          );
          setPlanet(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching data from NASA API', error);
          setLoading(false);
        }
      };

      fetchPlanet();
    }, []);

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="nasa-planets-block">
        {planet && (
          <div>
            <h2>{planet.title}</h2>
            <p>{planet.explanation}</p>
            <img src={planet.url} alt={planet.title} />
          </div>
        )}
      </div>
    );
  },
  save: () => {
    return null; // Bloco dinâmico, não há necessidade de salvar conteúdo
  }
});
