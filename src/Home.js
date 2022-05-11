import React from "react";
import { Link } from "react-router-dom";
import planets from "./data.json"
 
function Home() {
    return (
        <>
        <div className="">
            {/* <h1 className="flex justify-center font-antonio text-3xl">The Planets</h1> */}
            <h2 className="flex justify-center font-spartan text-2xl md:text-3xl py-6">Learn about our solar system!</h2>
            <div className="grid grid-cols-3 p-6">
                {planets.map((planet) => {
                    return (
                        <div className="p-2 mx-auto">
                            <Link to={planet.name}>
                                <span className="block font-spartan uppercase hover:font-bold">
                                    <img className="max-h-48 hover:max-h-64" src={planet.images.planet} alt={`${planet.name}`}></img>
                                    <p className="flex justify-center py-4">{planet.name}</p>
                                </span>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    );
}
 
export default Home;