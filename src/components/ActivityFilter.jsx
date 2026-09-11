import { useState } from 'react';
const activities = [{ icon: '🏊', name: 'Nadar en las piscinas naturales' }, { icon: '🥾', name: 'Caminatas ecológicas' }, { icon: '📷', name: 'Fotografía de paisajes' }, { icon: '🌿', name: 'Observación de flora y fauna' }, { icon: '🪨', name: "Explorar las Cuevas K'an Ba" }, { icon: '🏕️', name: 'Acampar en la naturaleza' }];
export default function ActivityFilter() {
  const [search, setSearch] = useState('');
  const results = activities.filter(({ name }) => name.toLocaleLowerCase('es').includes(search.trim().toLocaleLowerCase('es')));
  return <section className="card" id="actividades"><p className="section-label">Algo para todos</p><h2>Actividades</h2><label className="search-label" htmlFor="activity-search">Buscar una actividad</label><input id="activity-search" className="search-input" type="text" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Ej. caminata, fotografía..." />{results.length ? <ul className="activity-list">{results.map((activity) => <li key={activity.name}><span aria-hidden="true">{activity.icon}</span>{activity.name}</li>)}</ul> : <p className="empty-message">No encontramos actividades con “{search}”.</p>}</section>;
}
