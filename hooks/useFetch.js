import {useState} from 'react';
import {Platform} from 'react-native';
import axios from 'axios';

import {API_URL, API_URL_TWO} from '../constants';

const PLATFORM_URL = Platform.OS === 'android' ? API_URL : API_URL_TWO;

// useFetch custom hook
const useFetch = (endpoint, payload) => {
  const [data, setData] = useState ([]);
  const [error, setError] = useState (null);
  const [isLoading, setIsLoading] = useState (false);

  // Create Options objects
  const options = {
    method: 'POST',
    url: `${PLATFORM_URL}/${endpoint}`,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
    data: payload,
  };

  const fetchData = async () => {
    setIsLoading (true);
    try {
      const response = await axios.request (options);
      setData (response.data);
      setIsLoading (false);
    } catch (error) {
      setError (error);
      alert ('Something is wrong');
    } finally {
      setIsLoading (false);
    }
  };

  const refetch = () => {
    setIsLoading (true);
    fetchData ();
  };

  return {data, error, isLoading, fetchData, refetch};
};

export default useFetch;
