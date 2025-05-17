// Alex Miller
// Map for about me page

'use client'

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';

import { FaGraduationCap, FaBriefcase, FaUniversity, FaHome } from "react-icons/fa";


const Map = () => {

    return (
        <div className="">
            <MapContainer 
                key={typeof window !== "undefined" ? window.location.pathname: 'MAP'}
                center={[46.558907,-87.406202]} 
                zoom={7} 
                scrollWheelZoom={true}
                className="h-100 w-80 rounded-lg shadow-md"
                >

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Calumet */}
                <Marker position={[47.243170, -88.447575]}>
                    <Popup>
                        <div className="flex">
                            <FaHome size={16} />
                            <FaUniversity size={16} />
                            <h3 className="px-2">Calumet High School</h3>
                        </div>
                    </Popup>
                </Marker>

                {/* Westwood */}
                <Marker position={[46.481769, -87.725528]}>
                    <Popup>
                        <div className="flex">
                            <FaGraduationCap size={16} />
                            <h3 className="px-2">Westwood High School</h3>
                        </div>
                    </Popup>
                </Marker>

                {/* Copper Harbor */}
                <Marker position={[47.470570, -87.891152]}>
                    <Popup>
                        <div className="flex">
                            <FaBriefcase size={16} />
                            <h3 className="px-2">Isle Royale Ferry Line</h3>
                        </div>
                    </Popup>
                </Marker>

                {/* Marquette */}
                <Marker position={[46.558907,-87.406202]}>
                    <Popup>
                        <div className="flex">
                            <FaGraduationCap size={16} />
                            <h3 className="px-2">Northern Michigan University</h3>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default Map;

