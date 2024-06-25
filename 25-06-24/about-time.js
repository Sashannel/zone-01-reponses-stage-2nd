function ultimateScoreboard(scores, count) {
scores.sort((a, b) => a.duration - b.duration);

const topScores = scores.slice(0, count);

const formatDuration = (duration) => {
const minutes = Math.floor(duration / 60);
const seconds = duration % 60;
return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

return topScores.map((score, index) => {
const formattedDuration = formatDuration(score.duration);
return `#${String(index + 1).padStart(2, '0')} - ${formattedDuration}, ${score.name}`;
});
}
