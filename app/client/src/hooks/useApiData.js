// Custom hook for API data fetching
import { useState, useEffect, useCallback } from 'react';

export const useApiData = (apiCall, fallbackData = null) => {
  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await apiCall();
      setData(response.data?.data || response.data || response);
    } catch (err) {
      console.error('API fetch error:', err);
      setError(err);
      if (fallbackData) {
        setData(fallbackData);
      }
    } finally {
      setLoading(false);
    }
  }, [apiCall, fallbackData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useApiData;
