import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.VITE_GEMINI_API_KEY });

export default async function handler(req, res) {
  // const apiKey = process.env.VITE_GEMINI_API_KEY;
  // console.log("Our API key = ", apiKey);
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  // console.log("The newest console.log statement = ", req.body);
  let { name, country, text, humidity, temp_c, wind_kph, gust_kph } = req.body;
  console.log("Specs upon which the AI summary will made ", name, country, text, humidity, temp_c, wind_kph, gust_kph )
  let prompt = `You are a weather reporter writing a short forecast summary for a weather app UI.

Weather data:
- Location: ${name}, ${country}
- Condition: ${text}
- Temperature: ${temp_c}°C
- Humidity: ${humidity}%
- Wind speed: ${wind_kph} km/h
- Wind gusts: ${gust_kph} km/h

Write a response in this exact JSON format, with no markdown, no code fences, and no extra text outside the JSON:

{
  "headline": "A punchy 2-4 word weather headline, e.g. 'Storm with Heavy Rain' or 'Clear and Sunny Skies'",

  "description": "A 3 sentence natural-language forecast description written like a professional broadcast meteorologist, not a data readout. Describe the overall condition and how it feels (e.g., mild, brisk, humid, gusty at times, calm) using descriptive language rather than mechanically restating the exact temperature, humidity percentage, or wind speed figures — those are already displayed elsewhere in the UI, so repeating them verbatim is redundant. You may reference general trends or approximate ranges (e.g., 'winds picking up through the afternoon', 'a slight chance of showers') but avoid quoting the precise input numbers digit-for-digit. Do not repeat the location name."
}

Keep the tone calm, factual, and similar to a professional weather app (like Apple Weather or AccuWeather). Avoid exclamation marks or overly casual language.
`;

  try {
    //  Copy how to use the google api key from the official docs not from AI directly, AI make mess up sometime.
    const interaction = await ai.interactions.create({
      model: "gemini-3.1-flash-lite",
      input: prompt,
    });
    // const interaction = await ai.models.generateContent({
    //   model: "gemini-3.1-flash-lite",
    //   contents: prompt,
    //   config: {
    //     thinkingConfig: {
    //       thinkingLevel: "low",
    //     },
    //   },
    // });
    res.status(201).json({ aiSummary: interaction.output_text });
    console.log("Ai responce = ", interaction.output_text);
  } catch (error) {
    console.error("catch of LOC 42, and error =  ", error);
    res.status(500).json({ error: "Failed to generate AI summary" });
  }
  // return res.status(200).json({
  //   message: "The server is established successfully and working now ... ",
  // });
}
