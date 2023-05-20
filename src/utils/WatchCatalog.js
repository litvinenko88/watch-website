import axios from "axios";

class WatchCatalog {
  async getCatalog(url) {
    try {
      const response = await axios.get(url);

      return response.data;
    } catch (err) {
      console.log(err);
      return false
    }
  }
}

export const watchCatalog = new WatchCatalog();
