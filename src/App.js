import React, { useState, useEffect } from 'react';
import controlData from './controlData.json';

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function PlayerRow({ player }) {
  return (

    <tr className="playerRow">
        <td>{player.id}</td>
        <td>{player.name}</td>
        <td>{player.team}</td>
        <td>{player.position}</td>
    </tr>
  );
}

function ProductTable() {
  const [players, setPlayers] = useState([]);
  const rows = [];
   let lastCategory = null;

    useEffect(() => {
      // Set the players data when the component mounts
      setPlayers(controlData.players);
    }, []);

  return (
    <table className="playerTable">
      <thead style={{ width:'100%' }}>
        <tr>
            <th colSpan="2" style={{ textAlign: 'center' }}>Player Rankings</th>
        </tr>
      </thead>
      <tbody>
        {players.map(player => (
          <PlayerRow key={player.id} player={player} />
         ))}
      </tbody>
    </table>
  );
}

function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}
        Only show products in stock
      </label>
    </form>
  );
}

function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

export default function App() {
  return <FilterableProductTable products={controlData} />;
}
