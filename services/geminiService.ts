import { GoogleGenAI } from "@google/genai";

export const getLegacyAssistantResponse = async (userPrompt: string, history: {role: string, parts: {text: string}[]}[]) => {
  // Use the mandatory process.env.API_KEY as per the platform requirements
  const apiKey = process.env.API_KEY;
  
  try {
    if (!apiKey) {
      console.error("API_KEY is missing in environment variables.");
      return "Assistant configuration error. Please ensure the API key is properly set in the project settings.";
    }

    // Initialize the AI client using the provided API key
    const ai = new GoogleGenAI({ apiKey });

    const response = await ai.models.generateContent({
      // Using 'gemini-3-flash-preview' as it is the recommended model for text tasks
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

    // Directly access the .text property from the response as per SDK specifications
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having a little trouble connecting right now. Let's try reflecting on your legacy again in a moment.";
  }
};