
 /*  const setDate = new Date();
  const Todaydate = `${setDate.getFullYear()}-${setDate.getMonth()+1}-${setDate.getDate()}` */
   /*   fetch('https://newsapi.org/v2/top-headlines?country=br&apiKey=35af0917ca67481a91caf6dd75a8caeb')
    .then(res => res.json())
    .then(data => setData(data)) */
  
    /* fetch(`https://newsapi.org/v2/everything?q=Apple&from=${Todaydate}&sortBy=popularity&apiKey=35af0917ca67481a91caf6dd75a8caeb`) 
    .then(res=>res.json())
    .then(data=>setData(data.articles))*/
  
import { useState, useEffect } from 'react';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
      setLoading('loading...')
      setData(null);
      setError(null);
      fetch(url)
      .then(res => {
          setLoading(false);
          //checking for multiple responses for more flexibility 
          //with the url we send in.
          res.json().then(data=> setData(data))
          
      })
      .catch(err => {
          setLoading(false)
          setError('An error occurred. Awkward..')
      })
     
  }, [url])

  return { data, loading, error }
}

export default useFetch;
