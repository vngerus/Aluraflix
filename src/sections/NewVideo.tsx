import React, { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const NewVideo: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        imageUrl: "",
        videoUrl: "",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.category || !formData.imageUrl || !formData.videoUrl) {
            alert("Todos los campos son obligatorios.");
            return;
        }

        try {
            const videosRef = ref(db, "cards");
            await push(videosRef, formData);

            alert("Nuevo video agregado con éxito.");

            navigate("/");
        } catch (error) {
            console.error("Error al añadir el video:", error);
            alert("Ocurrió un error al guardar el video.");
        }
    };

    return (
        <div className="p-8 bg-gray-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-6">NUEVO VIDEO</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block font-bold mb-2">Título</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-700"
                        placeholder="Ingrese el título"
                        required
                    />
                </div>
                <div>
                    <label className="block font-bold mb-2">Categoría</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-700"
                        required
                    >
                        <option value="">Seleccione una categoría</option>
                        <option value="Front End">Front End</option>
                        <option value="Back End">Back End</option>
                        <option value="Innovación y Gestión">Innovación y Gestión</option>
                    </select>
                </div>
                <div>
                    <label className="block font-bold mb-2">Imagen</label>
                    <input
                        type="text"
                        name="imageUrl"
                        value={formData.imageUrl}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-700"
                        placeholder="Ingrese el enlace de la imagen"
                        required
                    />
                </div>
                <div>
                    <label className="block font-bold mb-2">Video</label>
                    <input
                        type="text"
                        name="videoUrl"
                        value={formData.videoUrl}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-700"
                        placeholder="Ingrese el enlace del video"
                        required
                    />
                </div>
                <div>
                    <label className="block font-bold mb-2">Descripción</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-2 rounded bg-gray-700"
                        placeholder="¿De qué se trata este video?"
                    />
                </div>
                <div className="flex justify-between">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                        Guardar
                    </button>
                    <button
                        type="reset"
                        onClick={() =>
                            setFormData({
                                title: "",
                                category: "",
                                imageUrl: "",
                                videoUrl: "",
                                description: "",
                            })
                        }
                        className="bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded"
                    >
                        Limpiar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewVideo;
