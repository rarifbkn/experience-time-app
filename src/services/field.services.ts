export async function fetchFields() {
  const url = `${import.meta.env.VITE_BACKEND_URL}/fields`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
}
