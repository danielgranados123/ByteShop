import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useFetch =()=>
{
const SERVER_URL = 'https://digitalzone-33vl.onrender.com';

const useLogin = async (email, password)=>{

  const response = await fetch(`${SERVER_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Error en la autenticación');
  }
  const data = await response.json();
  alert(data.message);
  return data;

}


return { useLogin };
}

export default useFetch;