import { client } from '../config'

export default function Steps() {
    return (
        <section id="how-it-works">
            <div className="wrap">
                <h2>{client.steps.title}</h2>
                <p className="lead" style={{ marginBottom: 0 }}>{client.steps.subtitle}</p>
                <ol className="steps">
                    {client.steps.items.map((step) => (
                        <li key={step.title}>
                            <h3>{step.title}</h3>
                            <p>{step.text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
