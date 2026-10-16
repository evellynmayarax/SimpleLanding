import { whatsappUrl } from '../config'

export default function Button({ children }) {
    return (
        <a className="btn" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}
