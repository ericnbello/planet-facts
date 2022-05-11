import React, { useState } from "react";
import SourceIcon from "./icons/SourceIcon";

const Planet = (props) => {
    const [openTab, setOpenTab] = useState(1);

    return (
        <div className="max-w-8xl mx-auto p-6">
            <div className="main flex flex-col md:flex-row pb-16">
                
                {/* Mobile Tabs */}
                <div className="flex md:hidden md:justify-start -mt-5 pb-16">
                    <div className="w-full">
                        <ul
                            className="flex font-spartan tracking-widest mb-0 list-none flex-row md:flex-col gap-4"
                            role="tablist"
                        >
                            <li className="flex-auto text-center">
                            <a
                                className={
                                "text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal " +
                                (openTab === 1
                                    ? "text-white border-b-2 border-yellow"
                                    : "text-lightGray bg-transparent border-b-2 border-darkGray")
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
                                    ? "text-white border-b-2 border-yellow"
                                    : "text-lightGray bg-transparent border-b-2 border-darkGray")
                                }
                                onClick={e => {
                                e.preventDefault();
                                setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Structure
                            </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                            <a
                                className={
                                "text-xs font-bold uppercase px-5 py-3 shadow-lg block leading-normal " +
                                (openTab === 3
                                    ? "text-white border-b-2 border-yellow"
                                    : "text-lightGray bg-transparent border-b-2 border-darkGray")
                                }
                                onClick={e => {
                                e.preventDefault();
                                setOpenTab(3);
                                }}
                                data-toggle="tab"
                                href="#link3"
                                role="tablist"
                            >
                                Surface
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="images flex w-1/2 justify-center items-center mx-auto">
                    <div clasName="overview">
                        <img className={openTab === 1 ? "block max-h-96 mx-auto my-auto" : "hidden"} id="link1" src={props.images.planet} alt=""></img>
                    </div>
                    <div clasName="structure">
                        <img className={openTab === 2 ? "block max-h-96 mx-auto" : "hidden"} id="link2" src={props.images.internal} alt=""></img>
                    </div>
                    <div clasName="geology">
                        <div className={openTab === 3 ? "block relative" : "hidden"} id="link3">
                            <img className="z-0 max-h-96 mx-auto" src={props.images.planet} alt=""></img>
                            <img className="absolute z-10 inset-x-0 -bottom-16 h-36 md:h-48 mx-auto" src={props.images.geology} alt=""></img>
                        </div>
                    </div>
                </div>
                <div className="content flex flex-col sm:flex-row md:flex-col w-full md:w-1/2 min-h-1/2">
                    <h2 className="flex font-antonio text-5xl uppercase justify-center md:justify-start pt-24 md:pt-16">{props.name}</h2>
                    <div className="font-spartan relative flex flex-col min-w-0 break-words bg-navyBlue w-full mb-6 shadow-lg rounded">
                        <div className="py-5 w-full md:w-3/4 flex-auto">
                            <div className="tab-content tab-space">
                                <div className={openTab === 1 ? "block text-center md:text-left" : "hidden"} id="link1">
                                    <p className="min-h-1/2">{props.overview.content}</p>
                                    <p className="flex justify-center md:justify-start text-lightGray pt-6">
                                        Source: 
                                        <a className="underline font-bold pl-2" href={props.overview.source}>
                                            Wikipedia 
                                        </a>
                                        <span className="flex pl-2 items-center">
                                            <a href={props.overview.source}>
                                                <SourceIcon />
                                            </a>
                                        </span>
                                    </p>
                                </div>
                                <div className={openTab === 2 ? "block text-center md:text-left" : "hidden"} id="link2">
                                    <p className="min-h-1/2">{props.structure.content}</p>
                                    <p className="flex justify-center md:justify-start text-lightGray pt-6">
                                        Source: 
                                        <a className="underline font-bold pl-2" href={props.structure.source}>
                                            Wikipedia 
                                        </a>
                                        <span className="flex pl-2 items-center">
                                            <a href={props.structure.source}>
                                                <SourceIcon />
                                            </a>
                                        </span>
                                    </p>
                                </div>
                                <div className={openTab === 3 ? "block text-center md:text-left" : "hidden"} id="link3">
                                    <p className="min-h-1/2">{props.geology.content}</p>
                                    <p className="flex justify-center md:justify-start text-lightGray pt-6">
                                        Source: 
                                        <a className="underline font-bold pl-2" href={props.geology.source}>
                                            Wikipedia 
                                        </a>
                                        <span className="flex pl-2 items-center">
                                            <a href={props.geology.source}>
                                                <SourceIcon />
                                            </a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Large Screen Tabs */}
                    <div className="hidden md:flex md:justify-start h-1/2">
                        <div className="w-3/4">
                            <ul
                                className="flex font-spartan tracking-widest mb-0 list-none flex-col gap-4"
                                role="tablist"
                            >
                                <li className="flex-auto text-center">
                                <a
                                    className={
                                    "text-xs text-left font-bold uppercase px-5 py-3 shadow-lg block leading-normal" +
                                    (openTab === 1
                                        ? "text-white bg-yellow"
                                        : "text-white bg-transparent border-2 border-darkGray hover:bg-darkGray")
                                    }
                                    onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    <span className="text-lightGray pr-4">01</span>
                                    Overview
                                </a>
                                </li>
                                <li className="flex-auto text-center">
                                <a
                                    className={
                                    "text-xs text-left font-bold uppercase px-5 py-3 shadow-lg block leading-normal " +
                                    (openTab === 2
                                        ? `text-white bg-yellow`
                                        : `text-white bg-transparent border-2 border-darkGray hover:bg-darkGray`)
                                    }
                                    onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist"
                                >
                                    <span className="text-lightGray pr-4">02</span>
                                    Internal Structure
                                </a>
                                </li>
                                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                                <a
                                    className={
                                    "text-xs text-left font-bold uppercase px-5 py-3 shadow-lg block leading-normal " +
                                    (openTab === 3
                                        ? `text-white bg-yellow`
                                        : `text-white bg-transparent border-2 border-darkGray hover:bg-darkGray`)
                                    }
                                    onClick={e => {
                                    e.preventDefault();
                                    setOpenTab(3);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    <span className="text-lightGray pr-4">03</span>
                                    Surface Geology
                                </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-content flex flex-col md:flex-row">
                <ul className="flex uppercase flex-col w-full md:w-3/4 gap-4 md:gap-8 md:flex-row justify-evenly mx-auto">
                    <li className="flex flex-row md:w-1/4 justify-between items-center md:items-start md:flex-col border-2 border-darkGray py-2 px-4 md:py-6 md:pr-12">
                        <span className="font-spartan text-xs text-lightGray tracking-widest">Rotation Time</span>
                        {/* <br></br> */}
                        <span className="font-antonio text-2xl">{props.rotation}</span>
                    </li>
                    <li className="flex flex-row md:w-1/4 justify-between items-center md:items-start md:flex-col border-2 border-darkGray py-2 px-4 md:py-6 md:pr-12">
                        <span className="font-spartan text-xs text-lightGray tracking-widest">Revolution Time</span>
                        {/* <br></br> */}
                        <span className="font-antonio text-2xl">{props.revolution}</span>
                    </li>
                    <li className="flex flex-row md:w-1/4 justify-between items-center md:items-start md:flex-col border-2 border-darkGray py-2 px-4 md:py-6 md:pr-12">
                        <span className="font-spartan text-xs text-lightGray tracking-widest">Radius</span>
                        {/* <br></br> */}
                        <span className="font-antonio text-2xl">{props.radius}</span>
                    </li>
                    <li className="flex flex-row md:w-1/4 justify-between items-center md:items-start md:flex-col border-2 border-darkGray py-2 px-4 md:py-6 md:pr-12">
                        <span className="font-spartan text-xs text-lightGray tracking-widest">Average Temp.</span>
                        {/* <br></br> */}
                        <span className="font-antonio text-2xl">{props.temperature}</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
 
export default Planet;