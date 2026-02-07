
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateRomanticMessage = async (name: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Write a single, incredibly romantic, and poetic sentence asking ${name} to be a Valentine. Keep it short, sweet, and elegant. No hashtags or emojis.`,
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });
    return response.text || "Every moment with you is a piece of forever I never want to let go.";
  } catch (error) {
    console.error("Error generating message:", error);
    return "You are the best thing that ever happened to me.";
  }
};

export const generateReasonsILoveYou = async (): Promise<string[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "List 5 short, poetic reasons why someone is an amazing partner. Return as a JSON array of strings.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: { type: Type.STRING }
        }
      }
    });
    return JSON.parse(response.text || "[]");
  } catch (error) {
    return [
      "The way your eyes light up when you smile",
      "you feel like home to me",
      "I don’t need perfect moments, I just need them with you",
      "The way you make the world feel safe and warm",
      "Simply because you are uniquely you"
    ];
  }
};
