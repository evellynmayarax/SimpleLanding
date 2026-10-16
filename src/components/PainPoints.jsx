import { client } from '../config'
import Cards from './Cards'

export default function PainPoints() {
    return (
        <section className="alt" id="pain-points">
            <div className="wrap">
                <h2>{client.painPoints.title}</h2>
                <Cards items={client.painPoints.items} />
            </div>
        </section>
    )
}
