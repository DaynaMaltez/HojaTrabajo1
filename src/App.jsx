import ActivityFilter from './components/ActivityFilter.jsx';
import Gallery from './components/Gallery.jsx';
import QuoteCalculator from './components/QuoteCalculator.jsx';
import ReservationForm from './components/ReservationForm.jsx';
import Testimonials from './components/Testimonials.jsx';
import heroImage from '../semuc5.jpg';

const itinerary = [
  ['15/08/2026', '6:00 a. m.', 'Salida desde Ciudad de Guatemala', 'Terminal de buses'],
  ['15/08/2026', '1:00 p. m.', 'Llegada y almuerzo', 'Lanquín'],
  ['15/08/2026', '3:00 p. m.', 'Recorrido por el mirador', 'Semuc Champey'],
  ['15/08/2026', '4:30 p. m.', 'Baño en las piscinas naturales', 'Semuc Champey'],
  ['16/08/2026', '8:00 a. m.', 'Caminata ecológica', 'Senderos naturales'],
  ['16/08/2026', '10:30 a. m.', "Visita a las Cuevas de K'an Ba", 'Lanquín'],
  ['16/08/2026', '1:00 p. m.', 'Almuerzo', 'Restaurante local'],
  ['16/08/2026', '2:30 p. m.', 'Regreso a Ciudad de Guatemala', 'Lanquín'],
];

export default function App() {
  return <>
    <header className="hero" style={{ backgroundImage: `url(${heroImage})` }}><div className="hero__overlay"><p className="hero__eyebrow">Alta Verapaz, Guatemala</p><h1>Semuc Champey</h1><p>Descubre un paraíso natural entre montañas y aguas turquesa.</p><a className="button button--light" href="#reservacion">Reserva tu aventura</a></div></header>
    <nav className="navigation" aria-label="Navegación principal"><a href="#galeria">Galería</a><a href="#itinerario">Itinerario</a><a href="#actividades">Actividades</a><a href="#cotizacion">Cotización</a><a href="#reservacion">Reservación</a></nav>
    <main><section className="card intro" id="descripcion"><p className="section-label">El destino</p><h2>Una maravilla natural de Guatemala</h2><p>Semuc Champey se encuentra en Lanquín, Alta Verapaz. Es famoso por sus piscinas de agua turquesa, formadas sobre un puente natural de piedra caliza bajo el cual fluye el río Cahabón.</p><p>Durante la excursión podrás visitar el mirador, nadar en aguas cristalinas, recorrer senderos ecológicos y explorar las cercanas Cuevas de K'an Ba.</p></section>
      <Gallery /><section className="card" id="itinerario"><p className="section-label">Plan de viaje</p><h2>Itinerario</h2><div className="table-wrapper"><table><thead><tr><th>Fecha</th><th>Horario</th><th>Actividad</th><th>Lugar</th></tr></thead><tbody>{itinerary.map(([date,time,activity,place]) => <tr key={`${date}-${time}`}><td>{date}</td><td>{time}</td><td>{activity}</td><td>{place}</td></tr>)}</tbody></table></div></section><ActivityFilter /><QuoteCalculator /><ReservationForm /><Testimonials /></main>
    <footer className="site-footer"><p>Desarrollado por Dayna Meza M.</p><p>Semuc Champey · Guatemala</p></footer>
  </>;
}
