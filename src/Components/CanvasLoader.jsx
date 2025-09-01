import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const CanvasLoader = () => {
    const {progress} = useProgress()
  return (
    <Html as='div' center className='flex justify-center items-center flex-col'>
        <span className='canvas-loader'/>
        <p className='text-xl font-bold mt-[40px]'>
            {progress != 0 ? `${progress.toFixed(2)}%` : 'Loading...'}
        </p>
    </Html>
  )
}

export default CanvasLoader