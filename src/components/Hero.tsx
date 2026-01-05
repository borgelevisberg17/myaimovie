'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { Navbar } from './Navbar'

/**
 * The Hero component is the main landing section of the website.
 * It features a full-screen background video and the main headline.
 * It also manages the state for the video's mute/unmute functionality.
 */
export function Hero() {
  const [isMuted, setIsMuted] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  // This effect ensures that the video is muted by default on component mount.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.volume = 0
    }
  }, [])

  // This effect toggles the video's mute state based on the `isMuted` state.
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
      videoRef.current.volume = isMuted ? 0 : 0.7
    }
  }, [isMuted])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black">
      <Navbar isMuted={isMuted} setIsMuted={setIsMuted} />
      {/* MASSIVE VIDEO - Takes up 95% of space */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover scale-110"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="https://mojli.s3.us-east-2.amazonaws.com/Mojli+Website+upscaled+(12mb).webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Big Studio Title - Lower Left */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-6 sm:left-8 lg:left-12 z-40"
      >
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white">
            <span className="block">AI FILM</span>
            <span className="block">PRODUCTION</span>
            <span className="block">WITHOUT LIMITS</span>
          </h1>
        </div>
      </motion.div>
    </div>
  )
}
