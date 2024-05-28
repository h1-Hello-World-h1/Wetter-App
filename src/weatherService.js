export const fetchWeatherData = async (location) => {
  const apiKey = import.meta.env.VITE_TOMORROW_API_KEY;
  const url = `https://api.tomorrow.io/v4/timelines?location=${location}&fields=temperature,humidity,precipitation&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching weather data failed:", error);
    throw error;
  }
};
