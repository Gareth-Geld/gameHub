import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../Services/api-client";

interface FetchDataResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setErrors] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchDataResponse<T>>(endPoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) {
          return;
        }
        setErrors(err.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return { data, error, isLoading };
};

export default useData;
