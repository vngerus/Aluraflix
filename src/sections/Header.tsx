import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between bg-AluraGris p-4">
            <img
                src="/assets/aluraflix.svg"
                alt="AluraFlix Logo"
                className="h-8"
            />

            <div className="flex space-x-4">
                <Link to="/">
                    <button className="border-2 border-blue-600 text-blue-600 px-4 py-2 w-[10rem] rounded hover:bg-blue-700">
                        HOME
                    </button>
                </Link>
                <Link to="/new-video">
                    <button className="border-2 border-white text-white px-4 py-2 rounded w-[10rem] hover:bg-gray-700">
                        NUEVO VIDEO
                    </button>
                </Link>
            </div>
        </header>
    );
};

export default Header;
