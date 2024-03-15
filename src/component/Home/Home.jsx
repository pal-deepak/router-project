import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-8">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-4 sm:py-8 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-left sm:ml-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl">
                        A Journey with Mr. Arun
                        </h2>
                        <h1 className="text-1xl font-semibold">I am journalistic luminary, has spent decades on the frontline, unraveling stories that echo through the corridors of truth.
                        A maestro in investigative reporting,  My pen has danced across pages, revealing narratives that transcend the ordinary
                        With an unwavering commitment to journalistic integrity, I has carved a legacy, blending curiosity with a profound sense of responsibility.
                        In the world of newsprint,I stands tall, his bylines a testament to a career dedicated to unearthing the stories that matter.
                        As a seasoned journalist, I keen insight and storytelling prowess have painted vivid portraits of societal shifts and cultural nuances.
                        Through the lens of I reporting, the ordinary becomes extraordinary, and the silence of untold stories finds its voice
                        A wordsmith of the highest order, I narratives have the power to captivate minds, weaving a tapestry of facts and emotions
                        In the ever-evolving landscape of journalism, I foresight and adaptability have made him a beacon, guiding the profession into new horizons
                        </h1>
                    </div>
                </div>

                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
                    <img className="w-96 rounded-full" src="https://cdn.gencraft.com/prod/user/f7de6e81-e551-4fcc-9954-468b05390169/07958bc4-37b0-4a85-a6a9-18168b0398a1/image/image1_0.jpg?Expires=1710601477&Signature=J7rGelUyQqhPnIiOk9FJUCkehztAITSPoOwHrWhdBktIleB~dxngxAcZvqjxs0oDlAPoT6afkOyvhe1fQ5yhJz~CKbBdDvlCy0cogPYy4qPklUUlV1DAZuZSGMP9Ka74XIeU2RfB8L2PhS3O1SPoF-DWVEpYGDS~vmCGT8S12q13q5ri2TXkgvb8OBBooLrGTnrSXnYTyWFqFxKUVEWze1hDPFENZfeW8vcdhHJjcOTAC~uvCGt1J8RQR5fEUZj2NaESnKj64a5ixfnpaq5mVlvG84PxY3KesBvJmIhiXq~GwbGbHuF2RaCOXZ8O-NC-pftEbsYDsvOuFtHO3ERznA__&Key-Pair-Id=K3RDDB1TZ8BHT8" alt="image1" />
                    <h1 className="font-bold text-orange-600 ml-28 p-4">Mr Arun singh</h1>
                    
                </div>
            </aside>
        </div>
    );
}
