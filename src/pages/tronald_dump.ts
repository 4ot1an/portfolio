//WARNING: current goes to an NSFW website
export async function fetchTronaldQuote() {
  try {
    const response = await fetch("https://api.tronalddump.io/random/quote", {
      method: "GET",
      headers: {
        "Accept": "application/hal+json" 
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data; 
    
  } catch (error) {
    console.error("Failed to fetch from Tronald Dump:", error);
    return { value: "We have the best fallback quotes, nobody has better fallback quotes." };
  }
}