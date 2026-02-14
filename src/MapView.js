import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

export default function MapView({ battles, onEdit, onDelete }) {
  return (
    <MapContainer center={[52.5, -1.5]} zoom={6} style={{ height: "80vh" }}>
      <TileLayer
        attribution="© OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {battles.map((battle) => (
        <Marker key={battle.id} position={[battle.lat, battle.lng]}>
          <Popup>
            <h3>{battle.title} ({battle.year})</h3>
            {battle.image && (
              <img src={battle.image} alt={battle.title} width="200" />
            )}
            <p>{battle.description}</p>
            <button onClick={() => onEdit(battle)}>Edit</button>
            <button onClick={() => onDelete(battle.id)}>Delete</button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

