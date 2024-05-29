export const fetchWeatherData = async (location) => {
  const apiKey = import.meta.env.VITE_TOMORROW_API_KEY;
  const url = `https://api.tomorrow.io/v4/timelines?location=${location}&fields=temperature,humidity,weatherCode&apikey=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    if (data.error) {
      throw new Error(`Api error:  ${data.error.message}`);
    }
    return data;
  } catch (error) {
    console.error("Fetching weather data failed:", error);
    throw error;
  }
};
