export function generateUrl(obj) {
  let query = '?';
  for (let a in obj) {
    query += `${a}=${obj[a]}&`;
  }
  return query;
}

export const fetcher = async (...args) => {
  try {
    const res = await fetch(...args);
    if (!res.ok) {
      const error = new Error('An error occurred while fetching the data.');
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return res.json();
  } catch (error) {
    console.error('Fetcher error:', error);
    throw error;
  }
}

export function shuffleArr(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}