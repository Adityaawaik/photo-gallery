import { useEffect, useState } from "react";

function useFetchPhoto() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch("https://picsum.photos/v2/list?limit=30");

        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        setError(error.msg);
      } finally {
        setLoading(false);
      }
    };
    fetchPhotos();
  }, []);

  return { photos, loading, error };
}

export default useFetchPhoto;
