export default function sortHealthStatus(array) {
  return array.sort((a, b) => b.health - a.health);
}
