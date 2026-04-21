import { useNavigate } from "react-router-dom";
import styles from "./VideoCard.module.css";

const VideoCard = ({ video }) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`/video/${video.id.videoId}`)}
    >
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />

        <p className={styles.title}>
            {video.snippet.title.length > 60
                ? video.snippet.title.slice(0, 60) + "..."
                : video.snippet.title}
        </p>
    </div>
  );
};

export default VideoCard;