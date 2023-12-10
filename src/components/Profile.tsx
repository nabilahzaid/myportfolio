import React from 'react'

type Props = {
    className?: string,
    nama: string
}

export const Profile = ({className, nama}: Props) => {
  return (
    <h1 className={className}>{nama}</h1>
  )
}