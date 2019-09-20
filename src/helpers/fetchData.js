const fetchData = (url, method = 'GET', value) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(value)
  }).then(response => response.json());
};

export default fetchData;
