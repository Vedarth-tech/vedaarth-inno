import { GoogleGenAI } from "@google/genai";
import presetData from '../DB/presetData.json'; // <-- Import preset data

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey });

const getResponse = async (input) => {
    // First, try to find a matching preset question
    const cleanString = (str) => {
        return str.replace(/[^a-zA-Z0-9\s]/g, '').toLowerCase(); // Removes punctuation and symbols
    };

    const matchedPreset = presetData.find((item) =>
        cleanString(item.question).includes(cleanString(input))
    );


    if (matchedPreset) {
        // If match found, return preset answer
        return matchedPreset.answer;
    }

    // Else, call Gemini API
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: input,
            config: {
                systemInstruction: "You are a chatbot of a website name Vedaarth. Your name is VED."
            }
        });
        return response.text;
    } catch (error) {
        console.error('Error fetching response:', error);
        return "Oops! Something went wrong.";
    }
};

export { getResponse };
