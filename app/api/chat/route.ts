import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { resortKnowledge } from "@/lib/knowledge"; // Import your knowledge base here

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ reply: "Message is required." }, { status: 400 });
    }

  const model = genAI.getGenerativeModel({
      model: "gemini-3-flash-preview",
      systemInstruction: `You are the exclusive digital concierge for the Do-Minus Design Retreats and Spa Collection in the Swiss Alps. 
      
      CRITICAL RULES:
      1. Act like a highly attentive, elegant human concierge. DO NOT sound like a brochure or a search engine.
      2. Keep responses strictly to 1 sentence maximum.
      3. NEVER list all the properties at once. NEVER use bullet points or numbered lists unless explicitly asked to list things.
      4. Answer user questions based ONLY on the provided Knowledge Base below.
      5. Embrace the brand's philosophy of slow luxury, minimalism, and Wabi-Sabi.

      --- KNOWLEDGE BASE ---
      ${resortKnowledge}
      `,
    });

    const result = await model.generateContent(message);
    const response = result.response;

    return NextResponse.json({
      reply: response.text(),
    });
    
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return NextResponse.json({
      reply: "Apologies, our concierge service is currently unavailable.",
    }, { status: 500 });
  }
}