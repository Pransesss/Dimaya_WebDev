'use client';
import { useState } from 'react';
import { getPokemon } from './pokedexapi';

export default function Home() {
  const [input, setInput] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState('');

  async function searchPokemon() {
    setError('');
    setPokemon(null);

    if (input == '') {
      setError('Please enter a Pokemon name or ID.');
      return;
    }

    var data = await getPokemon(input.toLowerCase().trim());

    if (!data) {
      setError('Pokemon not found. Try another name or ID.');
      return;
    }

    setPokemon(data);
  }

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', background: '#0a0a0a', color: 'white', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '500px', margin: '0 auto' }}>

        <h1 style={{ fontSize: '2.5em', textAlign: 'center', marginBottom: '5px', color: '#2e7d52' }}>Pokedex</h1>
        <p style={{ textAlign: 'center', color: '#aaa', marginBottom: '30px' }}>Search for any Pokemon</p>

        <div style={{ background: '#111', border: '1px solid #2e7d52', borderRadius: '10px', padding: '25px', marginBottom: '20px' }}>
          <h2 style={{ color: '#2e7d52', marginBottom: '15px' }}>Search</h2>
          <label style={{ display: 'block', marginBottom: '6px', color: '#ccc' }}>Pokemon Name or ID</label>
          <input
            type="text"
            placeholder="e.g. pikachu or 25"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ width: '100%', padding: '10px', background: '#1a1a1a', border: '1px solid #2e7d52', borderRadius: '6px', color: 'white', fontSize: '1em', marginBottom: '12px' }}
          />
          <button
            onClick={searchPokemon}
            style={{ width: '100%', padding: '12px', background: '#2e7d52', color: 'white', border: 'none', borderRadius: '6px', fontSize: '1em', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Search
          </button>
          {error && <p style={{ color: '#e74c3c', marginTop: '10px', fontSize: '0.9em' }}>{error}</p>}
        </div>

        {pokemon && (
          <div style={{ background: '#111', border: '1px solid #2e7d52', borderRadius: '10px', padding: '25px', marginBottom: '20px' }}>
            <h2 style={{ color: '#2e7d52', marginBottom: '15px' }}>Result</h2>
            <div style={{ textAlign: 'center', marginBottom: '15px' }}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} width={150} height={150} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#1a1a1a', borderLeft: '3px solid #2e7d52', borderRadius: '4px', marginBottom: '8px' }}>
              <span>Name</span><span style={{ textTransform: 'capitalize' }}>{pokemon.name}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#1a1a1a', borderLeft: '3px solid #2e7d52', borderRadius: '4px', marginBottom: '8px' }}>
              <span>Height</span><span>{pokemon.height / 10} m</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#1a1a1a', borderLeft: '3px solid #2e7d52', borderRadius: '4px', marginBottom: '8px' }}>
              <span>Weight</span><span>{pokemon.weight / 10} kg</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}