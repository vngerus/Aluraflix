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

interface CategorySectionProps {
    title: string;
    color: string;
    cards: CardData[];
    onEdit: (card: CardData) => void;
    onSelectVideo: (url: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({
    title,
    color,
    cards,
    onEdit,
    onSelectVideo,
}) => (
    <div className="mb-6">
        <div
            className={`text-center ${color} text-white py-2 rounded-md font-bold text-lg border-2 ${color} w-[14rem]`}
        >
            {title}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {cards.map((card) => (
                <Card
                    key={card.id}
                    title={card.title}
                    imageUrl={card.imageUrl}
                    videoUrl={card.videoUrl}
                    onEdit={() => onEdit(card)}
                    onClick={() => onSelectVideo(card.videoUrl)}
                />
            ))}
        </div>
    </div>
);

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

    const getEmbedUrl = (url: string) => {
        if (url.includes("watch?v=")) {
            return url.replace("watch?v=", "embed/");
        }
        return url;
    };

    const handleSave = async (updatedCard: CardData) => {
        try {
            const cardRef = ref(db, `cards/${updatedCard.id}`);
            await update(cardRef, updatedCard);
            setEditingCard(null);
        } catch (error) {
            console.error("Error al guardar la tarjeta:", error);
        }
    };

    return (
        <div className="p-8 bg-gray-900 text-white min-h-screen">
            {selectedVideo && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-gray-800 p-4 rounded-lg w-[90%] max-w-[800px]">
                        <iframe
                            width="100%"
                            height="400px"
                            src={getEmbedUrl(selectedVideo)}
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

            <CategorySection
                title="FRONT END"
                color="bg-blue-400 border-blue-400"
                cards={cards.filter((card) => card.category === "Front End")}
                onEdit={(card) => setEditingCard(card)}
                onSelectVideo={(url) => setSelectedVideo(url)}
            />

            <CategorySection
                title="BACK END"
                color="bg-green-400 border-green-400"
                cards={cards.filter((card) => card.category === "Back End")}
                onEdit={(card) => setEditingCard(card)}
                onSelectVideo={(url) => setSelectedVideo(url)}
            />

            <CategorySection
                title="INNOVACIÓN Y GESTIÓN"
                color="bg-yellow-400 border-yellow-400"
                cards={cards.filter(
                    (card) => card.category === "Innovación y Gestión"
                )}
                onEdit={(card) => setEditingCard(card)}
                onSelectVideo={(url) => setSelectedVideo(url)}
            />
        </div>
    );
};

export default Content;
