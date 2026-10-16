import { client } from '../config'

// Opcional: só exibe se o JSON tiver fotos na galeria.
// Por exemplo: { "src": "/office-1.jpg", "alt": "Consultório" }
export default function Gallery() {
    const gallery = client.gallery
    if (!gallery?.items?.length) return null

    return (
        <section className="alt" id="gallery">
            <div className="wrap">
                <h2>{gallery.title}</h2>
                <div className="gallery">
                    {gallery.items.map((image) => (
                        <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />
                    ))}
                </div>
            </div>
        </section>
    )
}
