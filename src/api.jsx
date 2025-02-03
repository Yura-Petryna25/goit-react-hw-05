import axios from "axios";

const ACCESS_KEY = "xogukwWm43rc-tClyvOsCzhzsWQ_H4UPfTt3TY43qls";
const BASE_URL = "https://api.unsplash.com/search/photos";

export const fetchImages = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      query,
      page,
      per_page: 12,
      client_id: ACCESS_KEY,
    },
  });
  return response.data;
};
