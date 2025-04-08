import React, { useRef, useEffect, useState, useCallback } from 'react'

const Navbar = ({ navOpen }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const activeBox = useRef()
    const navItemsRef = useRef([])
    const resizeObserver = useRef()

    const updateActiveBoxPosition = useCallback(() => {
        if (navItemsRef.current[activeIndex] && activeBox.current) {
            const activeItem = navItemsRef.current[activeIndex]
            activeBox.current.style.width = `${activeItem.offsetWidth}px`
            activeBox.current.style.height = `${activeItem.offsetHeight}px`
            activeBox.current.style.left = `${activeItem.offsetLeft}px`
            activeBox.current.style.top = `${activeItem.offsetTop}px`
        }
    }, [activeIndex])

    // Efecto principal para actualizar la posición
    useEffect(() => {
        updateActiveBoxPosition()

        // Configurar ResizeObserver para el elemento activo
        if (navItemsRef.current[activeIndex]) {
            resizeObserver.current = new ResizeObserver(updateActiveBoxPosition)
            resizeObserver.current.observe(navItemsRef.current[activeIndex])
        }

        // Configurar event listener para resize de ventana
        const handleResize = () => updateActiveBoxPosition()
        window.addEventListener('resize', handleResize)

        return () => {
            if (resizeObserver.current) {
                resizeObserver.current.disconnect()
            }
            window.removeEventListener('resize', handleResize)
        }
    }, [activeIndex, navOpen, updateActiveBoxPosition])

    const handleLinkClick = (index, e) => {
        e.preventDefault()
        setActiveIndex(index)
        const hash = e.target.getAttribute('href')
        if (hash && typeof window !== 'undefined') {
            const element = document.querySelector(hash)
            if (element) element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const navItems = [
        { label: 'Home', link: '#home' },
        { label: 'About', link: '#about' },
        { label: 'Work', link: '#work' },
        { label: 'Reviews', link: '#reviews' },
        { label: 'Contact', link: '#contact', className: 'md:hidden' }
    ]

    return (
        <nav className={`navbar ${navOpen ? 'active' : ''}`}>
            {navItems.map((item, index) => (
                <a
                    href={item.link}
                    key={index}
                    ref={el => navItemsRef.current[index] = el}
                    className={`nav-link ${index === activeIndex ? 'active' : ''} ${item.className || ''}`}
                    onClick={(e) => handleLinkClick(index, e)}
                >
                    {item.label}
                </a>
            ))}
            <div className="active-box" ref={activeBox} />
        </nav>
    )
}

export default Navbar