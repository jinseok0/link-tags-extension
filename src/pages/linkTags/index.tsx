import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const LinkTags = () => {
  const history = useHistory()

  useEffect(() => {
    console.log(history)
  }, [history])

  return <div>LinkTags</div>
}
