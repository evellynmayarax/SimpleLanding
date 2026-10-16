import { client } from '../config'
import Photo from './Photo'

export default function About() {
    return (
        <section className="alt about" id="about">
            <div className="wrap">
                <Photo />
                <div>
                    <h2>{client.about.title}</h2>
                    <p>{client.about.text}</p>
                    <ul className="credentials">
                        {client.about.credentials.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                </div>
            </div>
        </section>
    )
}
