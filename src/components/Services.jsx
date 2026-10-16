import { client } from '../config'
import Cards from './Cards'

export default function Services() {
    return (
        <section id="services">
            <div className="wrap">
                <h2>{client.services.title}</h2>
                <Cards items={client.services.items} />
            </div>
        </section>
    )
}
