import { client } from '../config'

export default function Footer() {
    return (
        <footer>
            <div className="wrap">
                <div><strong>{client.name}</strong> · {client.profession} · {client.license}</div>
                <div>{client.city} · {client.serviceFormat}</div>
                {client.instagram && (
                    <div><a href={client.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></div>
                )}
                <div>© {new Date().getFullYear()} Todos os direitos reservados.</div>
            </div>
        </footer>
    )
}
