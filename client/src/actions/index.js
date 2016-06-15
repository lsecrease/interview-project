import axios from 'axios';

export const SEARCH_REPO = 'SEARCH_REPO';

export function searchRepo(query) {
  const url = `/search?q=${query}`;
  const request = axios.get(url);

  return {
    type: SEARCH_REPO,
    payload: request
  }
}
