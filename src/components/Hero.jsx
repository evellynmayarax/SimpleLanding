import { client } from '../config'
import Button from './Button'
import Photo from './Photo'

export default function Hero() {
    return (
        <section className="hero">
            <div className="wrap">
                <div>
                    <h1>{client.hero.title}</h1>
                    <p className="lead">{client.hero.subtitle}</p>
                    <Button>{client.hero.button}</Button>
                    <small>{client.name} · {client.profession} · {client.license}</small>
                </div>
                <Photo />
            </div>
        </section>
    )
}
