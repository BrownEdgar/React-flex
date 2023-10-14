export async function fetchProductAPI(fetchUrl) {
  const res = await fetch(fetchUrl);
  const data = await res.json();
  return data;
}