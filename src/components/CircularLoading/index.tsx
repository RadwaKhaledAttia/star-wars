import React, { FC } from 'react'
import { CircularProgress, Box, Backdrop } from '@mui/material'

type Loading = {
  Open?: boolean
}

export const CircularLoading: FC<Loading> = ({ Open = false }) => {
  return (
    <Box sx={{ display: 'flex', position: 'absolute', right: '50%', top: '50%' }}>
      <Backdrop sx={{ color: '#FFFFFF', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={Open}>
        <CircularProgress size={100} sx={{ color: '#FADE4B' }} />
      </Backdrop>
    </Box>
  )
}

export default CircularLoading
