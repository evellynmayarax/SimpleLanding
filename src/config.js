// "@client" points only to the JSON chosen via VITE_CLIENT (see vite.config.js).
// This way, one client's build never carries another client's data.
import client from '@client'

export { client }

export const whatsappUrl =
    `https://wa.me/${client.whatsapp}?text=${encodeURIComponent(client.whatsappMessage)}`
