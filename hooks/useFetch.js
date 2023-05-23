import {useState} from 'react';
import {Platform} from 'react-native';
import axios from 'axios';

import {API_URL, API_URL_TWO} from '../constants';

const PLATFORM_URL = Platform.OS === 'android' ? API_URL : API_URL_TWO;

const headers = {
  'Content-Type': 'application/json',
  Authorization: 'secret',
};
// useFetch custom hook
const useFetch = (endpoint, payload) => {
  const [error, setError] = useState (null);
  const [isLoading, setIsLoading] = useState (false);

  // Create Options objects
  const options = {
    method: 'POST',
    url: `${PLATFORM_URL}/${endpoint}`,
    headers: headers,
    data: payload,
  };

  const fetchData = async () => {
    setIsLoading (true);
    try {
      await axios.request (options);
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

  return {error, setError, isLoading, fetchData, refetch};
};

const headersTwo = {
  'Content-Type': 'multipart/form-data',
  Authorization: 'secret',
};
// useFetch custom hook
export const useFetchForm = (endpoint, payload) => {
  const [error, setError] = useState (null);
  const [isLoading, setIsLoading] = useState (false);

  // Create Options objects
  const options = {
    method: 'POST',
    url: `${PLATFORM_URL}/${endpoint}`,
    headers: headersTwo,
    data: payload,
  };

  const fetchData = async () => {
    setIsLoading (true);
    try {
      await axios.request (options);
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

  return {error, setError, isLoading, fetchData, refetch};
};

export const usefetchGet = endpoint => {
  const [error, setError] = useState (null);
  const [isLoading, setIsLoading] = useState (false);
  const [data, setData] = useState ([]);

  // Create Options objects
  const options = {
    method: 'GET',
    url: `${PLATFORM_URL}/${endpoint}`,
    headers: headers,
  };

  const fetchData = async () => {
    setIsLoading (true);
    try {
      const response = await axios.request (options);
      const {data} = response;
      setData (data);
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

  return {error, setError, isLoading, fetchData, data, refetch};
};

export default useFetch;
