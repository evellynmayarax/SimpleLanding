import { client } from '../config'

// Optional: only shows up if the JSON has items (check if the professional council allows it!)
// Example item: { "name": "Maria", "text": "..." }
export default function Testimonials() {
    const testimonials = client.testimonials
    if (!testimonials?.items?.length) return null

    return (
        <section id="testimonials">
            <div className="wrap">
                <h2>{testimonials.title}</h2>
                <div className="grid">
                    {testimonials.items.map((item) => (
                        <blockquote key={item.name}>
                            “{item.text}”
                            <cite>{item.name}</cite>
                        </blockquote>
                    ))}
                </div>
            </div>
        </section>
    )
}
