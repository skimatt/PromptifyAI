// src/hooks/useImageProcessor.ts
import { useState, useCallback } from 'react';
import { generateImagePrompt } from '../services/geminiService';

interface PromptResult {
  description: string;
  prompt: string;
}

interface UseImageProcessorHook {
  result: PromptResult | null;
  isLoading: boolean;
  error: string;
  processImage: (file: File) => Promise<void>;
}

export const useImageProcessor = (): UseImageProcessorHook => {
  const [result, setResult] = useState<PromptResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const processImage = useCallback(async (file: File) => {
    setIsLoading(true);
    setError('');
    setResult(null);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64Image = (reader.result as string).split(',')[1];
      try {
        const rawResult = await generateImagePrompt(base64Image);
        
        let cleanedResult;
        
        if (!rawResult?.choices?.[0]?.message) {
          throw new Error("Invalid or empty API response from Gemini.");
        }

        let content = rawResult.choices[0].message.content;

        if (typeof content === 'string') {
          // Bersihkan string dari blok kode Markdown dan karakter yang tidak dapat dicetak
          let cleanString = content.replace(/```json\n|```/g, '').trim();
          
          // Tangani karakter khusus yang mungkin tersembunyi
          cleanString = cleanString.replace(/[\u0000-\u001F\u007F-\u009F]/g, "");

          try {
            // Coba parsing string yang sudah dibersihkan
            cleanedResult = JSON.parse(cleanString);
          } catch (jsonError) {
            throw new Error(`API content is not a valid JSON string. Raw content: "${cleanString}"`);
          }
        } else if (typeof content === 'object' && content !== null) {
          cleanedResult = content;
        } else {
          throw new Error("API response content is not a usable format.");
        }
        
        // Pastikan objek memiliki properti yang dibutuhkan
        if (!cleanedResult || !('description' in cleanedResult) || !('prompt' in cleanedResult)) {
          throw new Error("JSON output is missing 'description' or 'prompt' properties.");
        }

        setResult(cleanedResult);

      } catch (e: any) {
        console.error("Error processing API response:", e);
        setError(`Gagal memproses gambar. ${e.message || "Pastikan API Worker berjalan dengan baik dan outputnya adalah JSON yang valid."}`);
      } finally {
        setIsLoading(false);
      }
    };
    reader.readAsDataURL(file);
  }, []);

  return { result, isLoading, error, processImage };
};