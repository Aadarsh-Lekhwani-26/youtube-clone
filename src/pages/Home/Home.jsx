import VideoRow from "../../components/VideoRow/VideoRow";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>

      <VideoRow
        title="🎬 Movies & Series"
        query="latest movie trailers"
      />

      <VideoRow
        title="🍥 Anime"
        query="anime trailers"
      />

      <VideoRow
        title="🧸 Kids"
        query="cartoons for kids"
      />

      <VideoRow
        title="🔥 Popular"
        query="popular movie trailers"
      />
    </div>
  );
};

export default Home;