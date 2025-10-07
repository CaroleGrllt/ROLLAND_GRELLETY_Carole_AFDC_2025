import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
// import { Link, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from 'react-redux';
// import { logoutUser } from '../redux/actions/login.action';
import Icons from '../assets/img/icons/icon.jsx'
import Logo1 from '../assets/img/logos/Logo2-150.webp'
import Logo2 from '../assets/img/logos/Logo2-230.webp'
import Logo3 from '../assets/img/logos/Logo2-300.webp'

export default function Header() {
    const [open, setOpen] = useState(false);

    const navToggleRef = useRef(null);
    const drawerCloseRef = useRef(null);
    const logoutBtnRef = useRef(null);

    // const navigateTo = useNavigate()
    // const dispatch = useDispatch()
    const isConnected = false
    const firstName = "Carole"
    // const isConnected   = useSelector((state) => state.login.isConnected)
    // const firstName     = useSelector(state => state.user.firstName)

    const openModalCreateEvent = () => {
    console.log("👉 Modal de création d'événement à implémenter");
    };

    const handleLogout = () => {
        console.log("👉 Fonction de déconnexion à implémenter");
        // dispatch(logoutUser())
        // navigateTo('/')
    }
    
    // Fermer avec Esc uniquement quand le drawer est ouvert
    useEffect(() => {
        if (!open) return;
        function onKeyDown(e) {
        if (e.key === 'Escape') setOpen(false);
        }
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, [open]);

    // Focus sur le bouton fermer à l’ouverture (drawer)
    useEffect(() => {
        if (open && drawerCloseRef.current) drawerCloseRef.current.focus();
    }, [open]);

    // Rendre le focus au bouton d’ouverture après fermeture
    useEffect(() => {
        if (!open && navToggleRef.current) navToggleRef.current.focus();
    }, [open]);


    return (
        <header className="header">
            <nav aria-label="Navigation principale" className="nav-first">
                <div className="logo-container">
                    <Link to='/' aria-label="Retour à l’accueil - Au Fil des Costumes">                    
                        <img
                            src={Logo2} 
                            srcSet={`${Logo1} 150w, ${Logo2} 230w, ${Logo3} 300w`}
                            sizes="(min-width: 1024px) 300px, (min-width: 640px) 230px, 150px"
                            alt="Logo Au Fil des Costumes"
                        />
                    </Link>
                </div>

                {/* DESKTOP VERSION */}
                <ul className="drawer-links">
                    {isConnected ? (
                        <>
                            <li>
                                <Link to='/dashboard' aria-label="Tableau de bord">
                                    Bonjour, {firstName} ! <Icons aria-hidden='true' name="hello" className='smile-icon' />
                                </Link>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className="create-event-header-btn"
                                    aria-label="Créer un événement"
                                    onClick={openModalCreateEvent}
                                >
                                    Créer un événement <Icons aria-hidden='true' name="add" className='add-icon' />
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    className="logout"
                                    aria-label="Se déconnecter"
                                    onClick={handleLogout}
                                >
                                    Se déconnecter <Icons aria-hidden='true' name="logout" className='burger-menu' />
                                </button>
                            </li>
                        </>
                    ) : (
                        <li>
                            <Link to='/login'>
                                Se connecter <Icons aria-hidden='true' name="login" className='icon-link' />
                            </Link>
                        </li>
                    )}
                </ul>

                {/* MOBILE VERSION */}
                <button
                    ref={navToggleRef}
                    type="button"
                    className="nav-toggle"
                    aria-label="Ouvrir le menu"
                    aria-controls="mobile-drawer"
                    aria-expanded={open}
                    onClick={() => setOpen(true)}
                >
                    <Icons name="burger" className='burger-menu' />
                </button>
            </nav>

            {open && (
                <>
                    <button
                        className="backdrop"
                        aria-label="Fermer le menu"
                        onClick={() => setOpen(false)}
                    />
                    <aside
                        id="mobile-drawer"
                        className="mobile-drawer open"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Navigation"
                    >
                        <div className="drawer-header">
                            <button
                                ref={drawerCloseRef}
                                type="button"
                                className="drawer-close"
                                onClick={() => setOpen(false)}
                                aria-label="Fermer le menu"
                            >
                                <Icons name="close" className='close-menu' />
                            </button>
                        </div>
                        
                        <ul className="drawer-links" onClick={() => setOpen(false)}>
                            {isConnected ? (
                                <>
                                    <li>
                                        <Link to='/dashboard' aria-label="Tableau de bord">
                                           Bonjour, {firstName} ! <Icons name="hello" className='smile-icon' />
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className="create-event-header-btn"
                                            aria-label="Créer un événement"
                                            onClick={openModalCreateEvent}
                                        >
                                            Créer un événement <Icons name="add" className='add-icon' />
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                            type="button"
                                            className="logout"
                                            aria-label="Se déconnecter"
                                            onClick={handleLogout}
                                        >
                                          Se déconnecter <Icons name="logout" className='burger-menu' />
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <Link to='/login'>
                                        Se connecter <Icons name="login" className='icon-link' />
                                    </Link>
                                </li>
                            )}
                        </ul>
                    </aside>
                </>
            )}
        </header>
    )
}