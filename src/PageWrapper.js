import { Link } from "react-router-dom";
import planets from './data.json';

function PageWrapper() {
    return (
        <>
        <nav className="flex flex-row p-6 gap-6 bg-gray-400 text-black font-bold uppercase justify-between border-b-2 border-black">
            <div className="flex">
                <Link to="/">The Planets</Link>            
            </div>
            <div className="">
                <ul className="flex flex-col md:flex-row gap-6">
                    {/* <li><Link to="/">Home</Link></li> */}
                    {planets.map((planet) => {
                        return (
                            <li>
                                <Link to={planet.name}>{planet.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </nav>

        {this.props.children}

        <footer className="flex flex-col md:flex-row bg-indigo-500 mx-auto p-6 justify-between">
            <div>
                <Link to="/">The Planets</Link>
            </div>
            <div>
                <ul className="flex flex-col md:flex-row mx-auto items-center">
                    {/* <li><Link to="/mercury">Mercury</Link></li>
                    <li><Link to="/venus">Venus</Link></li>
                    <li><Link to="/earth">Earth</Link></li>
                    <li><Link to="/mars">Mars</Link></li>
                    <li><Link to="/jupiter">Jupiter</Link></li>
                    <li><Link to="/saturn">Saturn</Link></li>
                    <li><Link to="/uranus">Uranus</Link></li>
                    <li><Link to="/neptune">Neptune</Link></li> */}
                </ul>
            </div>
        </footer>
        </>
    )
}

export default PageWrapper;