import axios from "axios";
import { useState, useEffect } from "react";

export default function useFakeApi(url) {
  const [data, setData] = useState([]);
  const [isPending, setisPending] = useState(false);

  useEffect(() => {
    setisPending(true);
    axios(url).then((res) => {
      setData(res.data);
      setisPending(false);
    });
  }, [url]);

  return { data, isPending };
}
