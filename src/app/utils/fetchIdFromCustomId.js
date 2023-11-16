import axios from "axios";

async function fetchIdFromCustomId(customId) {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    const response = await axios.get(
      `${apiUrl}/api/law-posts?fields=id&filters[origin_id][$eq]=${customId}`
    );
    if (
      Array.isArray(response.data.data) &&
      response.data.data.length > 0 &&
      response.data.data[0].id
    ) {
      return response.data.data[0].id;
    } else {
      console.error("No 'id' found in the response data");
      return null;
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}

export default fetchIdFromCustomId;
