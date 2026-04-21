const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const fetchVideos = async (query, pageToken = "") => {
  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=6&pageToken=${pageToken}&regionCode=IN&safeSearch=moderate&key=${API_KEY}`
    );

    const data = await res.json();

    if (data.error) {
      console.error("YouTube API Error:", data.error.message);
      return null;
    }

    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};