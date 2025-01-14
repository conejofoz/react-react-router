import { Link } from "react-router-dom";

export const About = ()=>{
    return (
        <div>
            ABOUT
            <hr />
            <ul>
                <li><Link to="/sobre/joao">João</Link></li>
                <li><Link to="/sobre/juanito">Juanito</Link></li>
            </ul>

        </div>
    )
}