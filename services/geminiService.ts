import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const rewriteText = async (currentText: string, instruction: string): Promise<string> => {
  if (!apiKey) {
    console.warn("API Key not found");
    return "Error: API Key missing.";
  }

  try {
    const prompt = `
      You are an expert email copywriter. 
      Rewrite the following text for an email marketing campaign.
      
      Current Text: "${currentText}"
      
      Instruction/Tone: ${instruction}
      
      Return ONLY the rewritten text. Do not add quotes or conversational filler.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text?.trim() || currentText;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return currentText;
  }
};