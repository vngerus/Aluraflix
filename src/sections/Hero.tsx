import React from 'react';

const Hero: React.FC = () => {
    return (
        <section
            className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: 'url(/assets/imgs/bg_flix.svg)' }}
        >
            <div className="absolute inset-0 bg-blue-600 bg-opacity-30"></div>

            <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-8 lg:px-16 space-y-8 lg:space-y-0">
                <div className="max-w-lg text-white z-10 text-center lg:text-left order-2 lg:order-1">
                    <span className="bg-blue-400 text-white font-bold px-4 py-1 rounded-lg text-lg">
                        FRONT END
                    </span>

                    <h1 className="text-4xl font-bold mt-6">Challenge React</h1>
                    <p className="text-lg mt-2 leading-relaxed">
                        Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                    </p>
                </div>

                <div className="z-10 order-1 lg:order-2 mt-8 lg:mt-0 flex justify-center">
                    <img
                        src="/assets/imgs/player.svg"
                        alt="¿Qué significa pensar como programador?"
                        className="rounded-3xl w-full max-w-xs lg:max-w-[700px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
