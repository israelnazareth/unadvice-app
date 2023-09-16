export async function fetchData() {
  try {
    const response = await fetch(import.meta.env.VITE_DATA_JSON);
    if (response.status !== 200) {
      throw new Error("Não foi possível carregar o arquivo JSON");
    }
    const data = await response.json();
    return data.payload;
  } catch (error) {
    console.error("Erro ao carregar o arquivo JSON:", error);
  }
}