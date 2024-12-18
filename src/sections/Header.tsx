import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex items-center justify-between bg-AluraGris p-4">
            <img
                src="/assets/aluraflix.svg"
                alt="AluraFlix Logo"
                className="h-8"
            />

            <div className="flex space-x-4">
                <button className="border-2 border-blue-600 text-blue-600 px-4 py-2 w-[10rem] rounded hover:bg-blue-700">
                    HOME
                </button>
                <button className="border-2 border-white text-white px-4 py-2 rounded w-[10rem]  hover:bg-gray-700">
                    NUEVO VIDEO
                </button>
            </div>
        </header>
    );
};

export default Header;
