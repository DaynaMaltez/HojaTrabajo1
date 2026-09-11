import { useState } from 'react';
const names = ['Ana Gómez', 'Carlos López', 'María Pérez', 'Luis Díaz', 'Dayna Meza'];
const comments = ['Una experiencia inolvidable. Las piscinas son todavía más bonitas en persona.', 'El guía fue excelente y nos hizo sentir seguros durante todo el recorrido.', 'Los paisajes son espectaculares y el mirador vale completamente la caminata.', 'Muy buena organización desde la salida hasta nuestro regreso a la ciudad.', '¡Recomendado al 100 %! Es un lugar que todos deberían conocer.'];
export default function Testimonials() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * names.length));
  return <section className="card testimonials" id="resenas"><p className="section-label">Experiencias reales</p><h2>Opiniones de nuestros visitantes</h2><blockquote><p>“{comments[index]}”</p><footer>— {names[index]}</footer></blockquote><button className="button button--outline" type="button" onClick={() => setIndex((current) => (current + 1) % names.length)}>Ver otra opinión</button></section>;
}
