function scoreboard(scores) {
  
  const maxDuration = 12 * 60;
  
  
  return scores
  .filter(score => score.duration < maxDuration)
  
.map(score => `${score.name}, ${score.duration} seconds`);
}
