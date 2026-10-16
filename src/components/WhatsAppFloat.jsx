import { whatsappUrl } from '../config'

export default function WhatsAppFloat() {
    return (
        <a className="whatsapp-float" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chamar no WhatsApp">
            <svg viewBox="0 0 32 32" aria-hidden="true">
                <path d="M16 3a13 13 0 0 0-11 19.8L3 29l6.4-2A13 13 0 1 0 16 3zm0 2.4a10.6 10.6 0 1 1-5.5 19.7l-.4-.2-3.8 1.2 1.2-3.7-.3-.4A10.6 10.6 0 0 1 16 5.4zm-4.2 5.3c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 3s1.3 3.5 1.4 3.7c.2.2 2.5 4 6.2 5.4 3 1.2 3.7.9 4.3.9.7-.1 2.1-.9 2.4-1.7.3-.8.3-1.5.2-1.7-.1-.1-.3-.2-.7-.4l-2.2-1.1c-.3-.1-.5-.1-.8.2l-1 1.200c-.2.2-.4.3-.8.1-.4-.2-1.5-.5-2.8-1.7-1-.9-1.7-2-1.9-2.4-.2-.4 0-.6.2-.8l.6-.7c.2-.2.2-.4.4-.6.1-.3 0-.5 0-.7l-1-2.4c-.3-.6-.5-.5-.7-.5z" />
            </svg>
        </a>
    )
}
