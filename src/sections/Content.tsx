import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { ref, onValue, update } from "firebase/database";
import Card from "../components/Card";
import EditCard from "../components/EditCard";

interface CardData {
    id: string;
    title: string;
    category: string;
    imageUrl: string;
    videoUrl: string;
}

const Content: React.FC = () => {
    const [cards, setCards] = useState<CardData[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
    const [editingCard, setEditingCard] = useState<CardData | null>(null);

    useEffect(() => {
        const cardsRef = ref(db, "cards");
        onValue(cardsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const formattedData = Object.keys(data).map((key) => ({
                    id: key,
                    ...data[key],
                }));
                setCards(formattedData);
            } else {
                setCards([]);
            }
        });
    }, []);

    const frontEndCards = cards.filter((card) => card.category === "Front End");
    const backEndCards = cards.filter((card) => card.category === "Back End");
    const innovationCards = cards.filter((card) => card.category === "Innovación y Gestión");

    const handleSave = async (updatedCard: CardData) => {
        const cardRef = ref(db, `cards/${updatedCard.id}`);
        await update(cardRef, updatedCard);
        setEditingCard(null);
    };

    return (
        <div className="p-8 bg-gray-900 text-white min-h-screen">
            {selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-gray-800 p-4 rounded-lg w-[90%] max-w-[800px]">
                        <iframe
                            width="100%"
                            height="400px"
                            src={selectedVideo}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>
            )}

            {editingCard && (
                <EditCard
                    card={editingCard}
                    onSave={handleSave}
                    onCancel={() => setEditingCard(null)}
                />
            )}

            <h2 className="text-3xl font-bold mb-6 text-blue-400">Front End</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {frontEndCards.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        imageUrl={card.imageUrl}
                        onEdit={() => setEditingCard(card)}
                        onDelete={() => console.log("Borrar", card.id)}
                        onClick={() => setSelectedVideo(card.videoUrl || "")}
                    />
                ))}
            </div>

            <h2 className="text-3xl font-bold mb-6 text-green-400">Back End</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {backEndCards.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        imageUrl={card.imageUrl}
                        onEdit={() => setEditingCard(card)}
                        onDelete={() => console.log("Borrar", card.id)}
                        onClick={() => setSelectedVideo(card.videoUrl || "")}
                    />
                ))}
            </div>

            <h2 className="text-3xl font-bold mb-6 text-yellow-400">Innovación y Gestión</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {innovationCards.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        imageUrl={card.imageUrl}
                        onEdit={() => setEditingCard(card)}
                        onDelete={() => console.log("Borrar", card.id)}
                        onClick={() => setSelectedVideo(card.videoUrl || "")}
                    />
                ))}
            </div>
        </div>
    );
};

export default Content;
