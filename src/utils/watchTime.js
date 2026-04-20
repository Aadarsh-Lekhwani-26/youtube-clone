export const saveWatchTime = (videoId, time) => {
  const data = JSON.parse(localStorage.getItem("watchTime")) || {};
  data[videoId] = (data[videoId] || 0) + time;
  localStorage.setItem("watchTime", JSON.stringify(data));
};