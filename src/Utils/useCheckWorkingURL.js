import { useState } from "react";

export const useCheckWorkingURL = async () => {
  const [workingURL, setWorkingURL] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const urls = [
    process.env.REACT_APP_BASE_URL,
    process.env.REACT_APP_FALLBACK_BASE_URL,
  ];

  for (const url of urls) {
    try {
      const response = await fetch(url, { method: "HEAD" });
      if (response.ok) {
        setWorkingURL(url);
        return url;
      }
    } catch (error) {
      console.log(url + " Not Working");
    }
    finally {
      setIsLoading(false);
    }
  }

  return workingURL;
};
