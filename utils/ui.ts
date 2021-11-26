export function starMapper(ranking: number) {
  return Array.from({ length: 5 }, (_, k) => k <= ranking)
}
