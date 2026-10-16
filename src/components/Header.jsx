import { client } from '../config'
import Button from './Button'

export default function Header() {
    return (
        <header>
            <div className="wrap">
                <a className="logo" href="#">{client.name}</a>
                <Button>{client.header.button}</Button>
            </div>
        </header>
    )
}