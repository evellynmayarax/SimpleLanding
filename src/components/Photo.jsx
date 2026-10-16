import { client } from '../config'

// Se "photo" estiver definido no JSON (ex: "/profile.jpg"), mostra a foto.
// Caso contrário, mostra as iniciais do cliente.
export default function Photo() {
  const initials = client.name.split(' ').map((part) => part[0]).slice(0, 2).join('')
  return (
    <div className="photo" aria-label={`Foto de ${client.name}`}>
      {client.photo ? <img src={client.photo} alt={client.name} /> : initials}
    </div>
  )
}
