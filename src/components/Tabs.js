import React from "react";
import { Link } from "react-router-dom";
// import data from "../data.json";

const Tabs = (props) => {
  const [openTab, setOpenTab] = React.useState(1);

  return (
      <>
    <div className="main flex flex-col md:flex-row justify-center pb-24">
    <div className="images w-full md:w-2/3 mx-auto">
        <div clasName="overview">
            <img className={openTab === 1 ? "block max-h-96 mx-auto my-auto" : "hidden"} id="link1" src={props.images.planet} alt=""></img>
        </div>
        <div clasName="structure">
            <img className={openTab === 2 ? "block max-h-96 mx-auto" : "hidden"} id="link2" src={props.images.internal} alt=""></img>
        </div>
        <div clasName="geology">
            <div className={openTab === 3 ? "block relative" : "hidden"} id="link3">
                <img className="z-0 max-h-96 mx-auto" src={props.images.planet} alt=""></img>
                <img className="absolute z-10 inset-x-0 -bottom-16 h-48 mx-auto" src={props.images.geology} alt=""></img>
            </div>
        </div>
    </div>
    <div className="content flex flex-col w-full md:w-1/3 pt-16">
        <h2 className="flex font-antonio text-5xl uppercase justify-center md:justify-start">{props.name}</h2>
        <div className="font-spartan relative flex flex-col min-w-0 break-words bg-navyBlue w-full mb-6 shadow-lg rounded">
            <div className="py-5 w-full md:w-3/4 flex-auto">
                <div className="tab-content tab-space">
                    <div className={openTab === 1 ? "block text-center md:text-left" : "hidden"} id="link1">
                        <p className="">{props.overview.content}</p>
                        <p className="py-2">Source: <Link className="underline font-bold" to={props.overview.source}>Wikipedia</Link></p>
                    </div>
                    <div className={openTab === 2 ? "block text-center md:text-left" : "hidden"} id="link2">
                        <p className="">{props.structure.content}</p>
                        <p className="py-2">Source: <Link className="underline font-bold" to={props.structure.source}>Wikipedia</Link></p>
                    </div>
                    <div className={openTab === 3 ? "block text-center md:text-left" : "hidden"} id="link3">
                        <p className="">{props.geology.content}</p>
                        <p className="py-2">Source: <Link className="underline font-bold" to={props.geology.source}>Wikipedia</Link></p>
                    </div>
                </div>
            </div>
        </div>

        
        {/* Large Screen Tabs */}
        {/* <Tabs /> */}
        <div className="hidden md:flex md:justify-start">
            <div className="w-3/4">
                <ul
                    className="flex font-spartan tracking-widest mb-0 list-none flex-col gap-4"
                    role="tablist"
                >
                    <li className="flex-auto text-center">
                    <a
                        className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal " +
                        (openTab === 1
                            ? "text-white bg-yellow"
                            : "text-white bg-transparent border-2 border-darkGray")
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                    >
                        Overview
                    </a>
                    </li>
                    <li className="flex-auto text-center">
                    <a
                        className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal " +
                        (openTab === 2
                            ? `text-white bg-yellow`
                            : `text-white bg-transparent border-2 border-darkGray`)
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist"
                    >
                        Internal Structure
                    </a>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                    <a
                        className={
                        "text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal " +
                        (openTab === 3
                            ? `text-white bg-yellow`
                            : `text-white bg-transparent border-2 border-darkGray`)
                        }
                        onClick={e => {
                        e.preventDefault();
                        setOpenTab(3);
                        }}
                        data-toggle="tab"
                        href="#link3"
                        role="tablist"
                    >
                        Surface Geology
                    </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</>
  );
};

export default Tabs;