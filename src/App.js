import { useState, useEffect } from "react";
import MapView from "./MapView";
import BattleForm from "./BattleForm";
import { getBattles, saveBattles } from "./storage";
import "leaflet/dist/leaflet.css";

function App() {
  const [battles, setBattles] = useState([]);
  const [editingBattle, setEditingBattle] = useState(null);

  useEffect(() => {
    setBattles(getBattles());
  }, []);

  useEffect(() => {
    saveBattles(battles);
  }, [battles]);

  const handleSave = (battle) => {
    const updated = battles.some((b) => b.id === battle.id)
      ? battles.map((b) => (b.id === battle.id ? battle : b))
      : [...battles, battle];

    setBattles(updated);
    setEditingBattle(null);
  };

  const handleDelete = (id) => {
    setBattles(battles.filter((b) => b.id !== id));
  };

  return (
    <div>
      <h1>England Battlefields Map</h1>
      <BattleForm onSave={handleSave} editingBattle={editingBattle} />
      <MapView battles={battles} onEdit={setEditingBattle} onDelete={handleDelete} />
    </div>
  );
}

export default App;

