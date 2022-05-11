import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import planets from "./data.json";

// Page components
import Nav from './components/Nav';
import Footer from "./components/Footer";
import Home from "./Home";
import Planet from "./Planet";

function App() {
  return (
    <div className="bg-[url('../public/images/background-stars.svg')] bg-navyBlue text-white min-h-screen">
        <main className="max-w-[1280px] mx-auto">
            <Nav />
                <Routes>
                    <Route path="/" element ={<Home />} />
                    {planets.map((planet) => {
                        return (
                            <Route 
                                path={planet.name} 
                                element={
                                    <Planet
                                        name={planet.name} 
                                        overview={planet.overview}
                                        structure={planet.structure}
                                        geology={planet.geology}
                                        rotation={planet.rotation}
                                        revolution={planet.revolution}
                                        radius={planet.radius}
                                        temperature={planet.temperature}
                                        images={planet.images}
                                        color={planet.color}
                                        colorHex={planet.colorHex}
                                    />
                                } 
                            />
                        )
                    })}
                </Routes>
            <Footer />
        </main>
    </div>
  );
}
export default App;