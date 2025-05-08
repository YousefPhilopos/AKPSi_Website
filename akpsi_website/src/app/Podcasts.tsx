"use client";

import React, { useState } from "react";
import SearchBar from "./components/SearchBar";

function Podcasts() {
  const [generatedContent, setGeneratedContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async (prompt: string) => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5008/podcast-audio/generate?prompt=" + encodeURIComponent(prompt));
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setGeneratedContent(data.test); 
    } catch (error) {
      console.error("Error generating content:", error);
      setGeneratedContent("Failed to generate content. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Podcast Generator</h1>
      <SearchBar onGenerate={handleGenerate} />
      {loading ? (
        <p>Loading...</p>
      ) : generatedContent ? (
        <div>
          <h2>Generated Content:</h2>
          <p>{generatedContent}</p>
        </div>
      ) : (
        <p>Enter a prompt to generate content.</p>
      )}
    </div>
  );
}

export default Podcasts;