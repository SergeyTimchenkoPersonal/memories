import axios from "axios";

const url = "http://localhost:8080/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (post) => axios.post(url, post);
