import axios from "axios";

const postAPI = {
  getPosts: async () => {
    try {
      const res = await axios.get("http://localhost:5000/posts");
      return res;
    } catch (err) {
      return err;
    }
  },
};

export default postAPI;
