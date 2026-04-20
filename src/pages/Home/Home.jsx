import VideoRow from "../../components/VideoRow/VideoRow";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <VideoRow title="🔥 Trending" />
      <VideoRow title="🎬 Movies" />
      <VideoRow title="🍥 Anime" />
      <VideoRow title="🧸 Kids" />
    </div>
  );
};

export default Home;