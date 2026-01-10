import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const apiService = {
  // Projects
  getProjects: () => api.get('/projects'),
  getFeaturedProjects: () => api.get('/projects?featured=true'),
  getProject: (id) => api.get(`/projects/${id}`),

  // Contact
  sendMessage: (data) => api.post('/contact', data),

  // GitHub
  getGithubRepos: () => api.get('/github/repos'),

  // Stats
  getStats: () => api.get('/stats'),
};

export const contactAPI = {
  sendMessage: (data) => api.post('/contact', data),
  send: (data) => api.post('/contact', data), // Alias for backwards compatibility
};

export const projectsAPI = {
  getAll: () => api.get('/projects'),
  getFeatured: () => api.get('/projects?featured=true'),
  getById: (id) => api.get(`/projects/${id}`),
};

export default apiService;
