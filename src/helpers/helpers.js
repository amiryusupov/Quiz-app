export function generateUrl(obj) {
  let query = '?';
  for (let a in obj) {
    query += `${a}=${obj[a]}&`;
  }
  return query;
}

export const fetcher = (url) => fetch(url).then(res => res.json());


export function shuffleArr(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}