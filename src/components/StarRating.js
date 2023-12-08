import React from 'react'
import { Star, StarBorder, StarHalf } from '@mui/icons-material'

function StarRating({rating}) {
  return (
    <div>
        {
        Array(Math.floor(rating))
        .fill()
        .map(_ => <Star/>)
        }
        {rating % 1 != 0 ? <StarHalf/> : null}
        {
        Array(Math.abs(Math.ceil(rating) - 5))
        .fill()
        .map(_ => <StarBorder/>)
        }
        <small>{rating}</small>
    </div>
  )
}

export default StarRating