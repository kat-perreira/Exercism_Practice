export const isIsogram = (word) => {
  const normalized = [...word]
  .filter(item => item !== "-" && item.trim() !== "")
  .map(item => item.toLowerCase());
  const uniqueSet = new Set(normalized);
  return uniqueSet.size === normalized.length;
};