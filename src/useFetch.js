import { t } from 'i18next';
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortConstant = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortConstant.signal })
        .then(res => {
          if(!res.ok) {
            throw Error(t('Could not fetch the data for that resource'));
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch(err => {
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setIsPending(false);
            setError(err.message);
          }
        })
    }, 500);

    return () => abortConstant.abort();
  }, [url]);

  return { data, isPending, error }
}
 
export default useFetch;