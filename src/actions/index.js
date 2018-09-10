import { API_ROOT_URL, API_KEY_BLOG } from '../api/keys';
import axios from 'axios';

export const FETCH_POSTS = 'fetch_posts';

export function fetchPosts() {
  const request = axios.get(`${API_ROOT_URL}/posts${API_KEY_BLOG}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}
