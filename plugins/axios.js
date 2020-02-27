export default function ({ $axios }) {
  $axios.setBaseURL(process.env.API_URL);
  $axios.setHeader('x-api-key', process.env.X_API_KEY);

  const token = localStorage.getItem('token');
  if (token !== undefined && token !== '') {
    $axios.setHeader('Authorization', token);
  }
}