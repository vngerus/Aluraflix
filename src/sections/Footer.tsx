import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black py-4">
            <div className="border-t-4 border-blue-500 flex justify-center items-center pt-2">
                <img src="/assets/alurafooter.svg" alt="Aluraflix Logo" className="h-10" />
            </div>
        </footer>
    );
};

export default Footer;
