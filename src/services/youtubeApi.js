const API_KEY = "YOUR_API_KEY";

export const fetchVideos = async (query, pageToken = "") => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=6&pageToken=${pageToken}&key=${API_KEY}`
    );

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching videos:", error);
  }
};