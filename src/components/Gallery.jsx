import { useEffect, useState } from 'react';
import semuc1 from '../../Semuc1.jpg';
import semuc2 from '../../Semuc2.jpg';
import semuc3 from '../../Semuc3.jpg';
import semuc4 from '../../Semuc4.jpg';

const images = [{ src: semuc4, title: 'Mirador de Semuc Champey' }, { src: semuc1, title: 'Piscinas naturales de agua turquesa' }, { src: semuc2, title: 'Aguas cristalinas entre la selva' }, { src: semuc3, title: 'Puente natural de piedra caliza' }];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => { const close = (event) => event.key === 'Escape' && setSelectedImage(null); window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, []);
  return <section className="card" id="galeria"><p className="section-label">Conoce el lugar</p><h2>Galería de imágenes</h2><div className="gallery">{images.map((image) => <button className="gallery__item" key={image.title} onClick={() => setSelectedImage(image)} type="button"><img src={image.src} alt={image.title} /><span>{image.title}</span></button>)}</div>
    {selectedImage && <div className="modal" role="dialog" aria-modal="true" aria-label={selectedImage.title} onClick={() => setSelectedImage(null)}><div className="modal__content" onClick={(event) => event.stopPropagation()}><button className="modal__close" onClick={() => setSelectedImage(null)} type="button" aria-label="Cerrar imagen">×</button><img src={selectedImage.src} alt={selectedImage.title} /><p>{selectedImage.title}</p></div></div>}</section>;
}
