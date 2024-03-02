import React from "react";
import { Link } from "react-router-dom";
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                           I am a dedicatet software developer
                        </h2>
                        <p className="mt-6 text-gray-600 font-bold">
                           Technical skills :
                        </p>
                        <p className="mt-6 text-gray-600 font-bold">
                          <li>C and C++ Programming</li>
                          <li>Data Structure and algorithm</li>
                          <li>Git and Github</li>
                          <li>Web developer</li>
                          <li>MS-Excel</li>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
