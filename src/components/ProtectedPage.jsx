import React, { useEffect } from 'react'
import { useAuth } from '../AuthProvider';
import { useHistory } from 'react-router-dom';

export default function ProtectedPage() {
  const {isAuth} = useAuth();
  let history = useHistory();
  
  useEffect(() => {
    if (!isAuth)
      history.push("/form")
  }, [isAuth, history])

  return (
    <div>
      Защищённая страница!
    </div>
  )
}
