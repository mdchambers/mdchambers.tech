import React from 'react'

import styles from './slides.module.scss';

const VideoSlide = () => {
  return (
    <video className={styles.headerVideo} src='video/Roundabout2.mp4' autoPlay  />
  )
}

export default VideoSlide
