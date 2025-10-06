import Logo1 from '../assets/img/logos/Logo2-150.webp'
import Logo2 from '../assets/img/logos/Logo2-230.webp'
import Logo3 from '../assets/img/logos/Logo2-300.webp'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className='footer'>
            <nav aria-label="Navigation secondaire">
                <div className='logo-container'>
                    <img
                        src={Logo2} 
                        srcSet={`${Logo1} 150w, ${Logo2} 230w, ${Logo3} 300w`}
                        sizes="(min-width: 1024px) 300px, (min-width: 640px) 230px, 150px"
                        alt="Logo Au Fil des Costumes"
                    />
                </div>

                <ul>
                    <li>Au Fil des Costumes © 2025</li>
                    <li>
                        <Link to='/mentions légales' aria-label="Mentions légales" title='Mentions légales'>
                            Mentions légales
                        </Link>
                    </li>
                    <li>
                        <Link to='/cgu' aria-label="Conditions Générales d'Utilisation" title="Conditions Générales d'utilisation">
                            CGU
                        </Link>
                    </li>
                    <li>
                        <Link to='/data' aria-label="Données personnelles" title="Données personnelles">
                            Données personnelles
                        </Link>
                    </li>
                    <li>
                        <Link to='/contact' aria-label="Contact" title="Contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}