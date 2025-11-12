export async function appFetch<T>(
  endpoint: string,
  options?: RequestInit,
): Promise<T> {
  const BASE_URL = import.meta.env.VITE_SERVER_API_URL;

  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, options);
    const json = await res.json();

    if (!res.ok) {
      throw new Error(`${json.code} ${json.message}`);
    }

    console.log('---');
    console.log(json);

    return json as T;
  } catch (error) {
    throw new Error(String(error));
  }
}
