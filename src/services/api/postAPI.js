import axios from "axios";

const postAPI = {
  getPosts: async () => {
    const res = await axios.get("http://localhost:5000/posts");
    return res;
  },
};

export default postAPI;
