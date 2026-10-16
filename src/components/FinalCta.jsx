import { client } from '../config'
import Button from './Button'

export default function FinalCta() {
    return (
        <section className="final">
            <div className="wrap">
                <h2>{client.finalCta.title}</h2>
                <p>{client.finalCta.text}</p>
                <Button>{client.finalCta.button}</Button>
            </div>
        </section>
    )
}
