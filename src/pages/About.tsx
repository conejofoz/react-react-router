import { Link, useSearchParams } from "react-router-dom";

export const About = ()=>{
    const [searchParams, setSearchParams ] = useSearchParams();

    const setOrder = (order: 'asc' | 'desc') =>{
        searchParams.set('order', order);
        setSearchParams(searchParams);
    }
    
    return (
        <div>
            Filtro: {searchParams.get('filter')}
            Ordem: {searchParams.get('order')}
            <hr />
            <button onClick={()=>setOrder('asc')}>Asc</button>
            <button onClick={()=>setOrder('desc')}>Desc</button>
            <hr />
            ABOUT
            <hr />
            <ul>
                <li><Link to="/sobre/joao">João</Link></li>
                <li><Link to="/sobre/juanito">Juanito</Link></li>
            </ul>

        </div>
    )
}