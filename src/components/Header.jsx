import { useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { client, whatsappUrl } from '../config'

const menuVariants = {
    closed: { opacity: 0, y: -12 },
    open: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08, delayChildren: 0.1 },
    },
}

const itemVariants = {
    closed: { opacity: 0, y: 18 },
    open: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

// Menu na ordem em que as seções aparecem na página.
// Seções opcionais (galeria) só entram no menu se tiverem conteúdo.
const links = [
    { label: 'Como funciona', href: '#how-it-works' },
    { label: 'Sobre', href: '#about' },
    { label: 'Atuação', href: '#services' },
    client.gallery?.items?.length && { label: 'Galeria', href: '#gallery' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Contato', href: '#contact' },
].filter(Boolean)

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const closeMenu = () => setIsOpen(false)

    // trava a rolagem da página enquanto o menu mobile está aberto
    useEffect(() => {
        document.documentElement.style.overflow = isOpen ? 'hidden' : ''
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => {
            document.documentElement.style.overflow = ''
            document.body.style.overflow = ''
        }
    }, [isOpen])

    // Esc fecha o menu
    useEffect(() => {
        const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
        window.addEventListener('keydown', onKey)
        return () => window.removeEventListener('keydown', onKey)
    }, [])

    return (
        <MotionConfig reducedMotion="user">
            <header className="header">
                <div className="wrap header__bar">
                    <a href="#" className="header__logo" onClick={closeMenu}>{client.name}</a>

                    <button
                        className="header__toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={isOpen}
                        aria-controls="menu-mobile"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={24} />}
                    </button>

                    <div className="header__content--desktop">
                        <nav className="header__menu" aria-label="Seções da página">
                            {links.map((l) => <a key={l.href} href={l.href}>{l.label}</a>)}
                        </nav>
                        <a className="btn header__button" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                            {client.header.button}
                            <ArrowUpRight size={14} strokeWidth={1.8} />
                        </a>
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            id="menu-mobile"
                            className="header__content--mobile"
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <nav className="header__menu" aria-label="Seções da página">
                                {links.map((l) => (
                                    <motion.a key={l.href} href={l.href} onClick={closeMenu} variants={itemVariants}>
                                        {l.label}
                                    </motion.a>
                                ))}
                            </nav>

                            <div>
                                <motion.a
                                    className="btn header__button"
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={closeMenu}
                                    variants={itemVariants}
                                >
                                    {client.header.button}
                                    <ArrowUpRight size={14} strokeWidth={1.8} />
                                </motion.a>
                                <motion.p className="header__copyright" variants={itemVariants}>
                                    © {new Date().getFullYear()} {client.name}. Todos os direitos reservados.
                                </motion.p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </MotionConfig>
    )
}
