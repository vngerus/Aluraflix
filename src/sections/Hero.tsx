import React from 'react';

const Hero: React.FC = () => {
    return (
        <section
            className="relative bg-cover bg-center h-screen"
            style={{ backgroundImage: 'url(/assets/imgs/bg_flix.svg)' }}
        >
            <div className="absolute inset-0 bg-blue-600 bg-opacity-30"></div>

            <div className="absolute inset-0 flex items-center px-8 lg:px-16">
                <div className="max-w-lg text-white z-10">
                    <span className="bg-blue-400 text-white font-bold px-4 py-1 rounded-lg text-lg">
                        FRONT END
                    </span>

                    <h1 className="text-4xl font-bold mt-6">Challenge React</h1>
                    <p className="text-lg mt-2 leading-relaxed">
                        Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                    </p>
                </div>

                <div className="ml-auto z-10">
                    <div className=" p-4 ">
                        <img
                            src="/assets/imgs/player.svg"
                            alt="¿Qué significa pensar como programador?"
                            className="rounded-3xl w-[700px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
