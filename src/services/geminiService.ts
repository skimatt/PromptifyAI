// src/services/geminiService.ts

export const generateImagePrompt = async (base64Image: string) => {
  try {
    const response = await fetch(
      "https://skimatt.rahmatyoung10.workers.dev/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-001",
          messages: [
            {
              role: "user",
              content: [
                {
                  type: "text",
                  text: "Jelaskan gambar ini secara detail, dengan fokus pada gaya, komposisi, warna, dan prompt deskriptif singkat untuk generator gambar AI. Format output sebagai objek JSON dengan kunci: 'description' dan 'prompt'.'."
                },
                {
                  type: "image_url",
                  image_url: { url: `data:image/jpeg;base64,${base64Image}` }
                }
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to generate prompt from the image.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error generating prompt:", error);
    throw error;
  }
};