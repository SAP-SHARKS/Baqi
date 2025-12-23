
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

export const getLegacyAssistantResponse = async (userPrompt: string, history: {role: string, parts: {text: string}[]}[]) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [...history, { role: "user", parts: [{ text: userPrompt }] }],
      config: {
        systemInstruction: `You are the Baqi Legacy Assistant, an expert in Islamic digital legacy, Sharia-compliant inheritance (Wasiyyah), and spiritual preparation. 
        Your goal is to help users document their legacy, reflect on their journey, and fulfill their Islamic obligations regarding their affairs. 
        Be compassionate, respectful, and use Islamic etiquette (like saying JazakAllah Khair, SubhanAllah, etc. when appropriate).
        Help users with:
        1. Drafting the preamble of their wasiyyah.
        2. Thinking of messages to leave for loved ones.
        3. Understanding the importance of Sadaqah Jariyah.
        4. Navigating digital cleanup for their akhirah.
        Keep responses concise and supportive. If asked about specific legal rulings, advise them to also consult with local scholars or legal professionals.`,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting right now. Let's try reflecting on your legacy again in a moment.";
  }
};
