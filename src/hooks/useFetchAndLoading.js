import { useEffect, useState } from "react";

export const useFetchAndLoading = (url, id) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const fetchedData = await fetch(url, {
          headers: {
            "X-API-KEY": `kg4sgs8okos4cw4w0kckwsgcgocgc4k0c0g8soc0`,
          },
        });

        const json = await fetchedData.json();

        setData(json);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        alert(error);
      }
    })();
  }, [id]);

  return {
    data,
    isLoading,
  };
};
