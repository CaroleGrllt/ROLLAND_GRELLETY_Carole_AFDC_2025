import Icons from '../assets/img/icons/icon.jsx'

export default function Filter({title, data}){
    return (
        <div className="filter-wrapper">
            <div className="filter">
                <span>{title}</span>
                <button
                    type="button"
                    aria-label={`Trier par ${title}`}
                    title={`Trier par ${title}`}
                >
                    <Icons name="chevronDown" aria-hidden="true" className='chevron-down' />
                </button>
            </div>
            <div className="filter-dropdown">
                <ul role="listbox" aria-label={title}>
                    {data.map(d => (
                        <li
                        key={d}
                        data-id={d}
                        data-type={title.toLowerCase()}
                        role="option"
                        tabIndex={0}
                        >
                        {d}
                        </li>
                    ))}                
                </ul>
            </div>
        </div>
    )
}