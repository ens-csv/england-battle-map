import { useState, useEffect } from "react";

export default function BattleForm({ onSave, editingBattle }) {
  const [battle, setBattle] = useState({
    title: "",
    year: "",
    lat: "",
    lng: "",
    image: "",
    description: ""
  });

  useEffect(() => {
    if (editingBattle) setBattle(editingBattle);
  }, [editingBattle]);

  const handleChange = (e) => {
    setBattle({ ...battle, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...battle, id: battle.id || Date.now() });
    setBattle({ title: "", year: "", lat: "", lng: "", image: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input name="title" placeholder="Battle Name" value={battle.title} onChange={handleChange} required />
      <input name="year" placeholder="Year" value={battle.year} onChange={handleChange} required />
      <input name="lat" placeholder="Latitude" value={battle.lat} onChange={handleChange} required />
      <input name="lng" placeholder="Longitude" value={battle.lng} onChange={handleChange} required />
      <input name="image" placeholder="Painting Image URL" value={battle.image} onChange={handleChange} />
      <textarea name="description" placeholder="Short Description" value={battle.description} onChange={handleChange} />
      <button type="submit">Save Battle</button>
    </form>
  );
}

