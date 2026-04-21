import { useEffect, useState } from "react";
import { fetchVideos } from "../../services/youtubeApi";
import VideoCard from "../VideoCard/VideoCard";
import styles from "./VideoRow.module.css";

const VideoRow = ({ title, query }) => {
  const [videos, setVideos] = useState([]);
  const [nextPageToken, setNextPageToken] = useState("");
  const [loading, setLoading] = useState(false);

  const loadVideos = async (token = "") => {
    if (loading) return;

    setLoading(true);

    const data = await fetchVideos(query, token);

    // ❌ API error safety
    if (!data || !data.items) {
      console.error("API Error:", data);
      setLoading(false);
      return;
    }

    // ✅ FIX: maintain correct list for cache
    const updatedVideos = token
      ? [...videos, ...data.items]
      : data.items;

    setVideos(updatedVideos);
    setNextPageToken(data.nextPageToken || "");

    // ✅ CACHE SAVE (VERY IMPORTANT)
    sessionStorage.setItem(
      query,
      JSON.stringify({
        items: updatedVideos,
        nextPageToken: data.nextPageToken,
      })
    );

    setLoading(false);
  };

  useEffect(() => {
    // ✅ CHECK CACHE FIRST
    const cached = sessionStorage.getItem(query);

    if (cached) {
      const parsed = JSON.parse(cached);
      setVideos(parsed.items || []);
      setNextPageToken(parsed.nextPageToken || "");
    } else {
      // reset + fetch only if no cache
      setVideos([]);
      setNextPageToken("");
      loadVideos();
    }
  }, [query]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.row}>
        {videos.map((video) => (
          <VideoCard key={video.id.videoId} video={video} />
        ))}
      </div>

      {/* 🔥 Load More */}
      {nextPageToken && (
        <button
          className={styles.loadMore}
          onClick={() => loadVideos(nextPageToken)}
          disabled={loading}
        >
          {loading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default VideoRow;