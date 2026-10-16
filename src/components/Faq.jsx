import { client } from '../config'

export default function Faq() {
    return (
        <section className="alt" id="faq">
            <div className="wrap">
                <h2>{client.faq.title}</h2>
                {client.faq.items.map((item) => (
                    <details key={item.question}>
                        <summary>{item.question}</summary>
                        <p>{item.answer}</p>
                    </details>
                ))}
            </div>
        </section>
    )
}
