import {Link} from 'react-router-dom'

export default function RedirectBtn({label, path, className}) {
    return(
        <Link
            to={path}
            className={className}   
        >
            <span>{label}</span>
        </Link>
    )
}