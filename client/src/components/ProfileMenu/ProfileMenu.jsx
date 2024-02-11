import React from 'react'

import { useNavigate } from 'react-router-dom'
const ProfileMenu = ({user, logout}) => {
    const navigate = useNavigate()
  return (
    <div onClick={logout}>{user.email}</div>
  )
}

export default ProfileMenu