import React, { useState, useEffect } from 'react'
import './Landing.css'
import { Badge, Modal, Button } from 'react-bootstrap'
import { useSpring, useTransition, animated, config } from 'react-spring'
import PDF from 'react-pdf-js'
import { Document, Page } from 'react-pdf'
import pdfs from '../../assets/pdfs/Pdfs'
import heroVideo from '../../assets/videos/working-bg.mp4'
import heroTabletVideo from '../../assets/videos/working-tablet.mp4'

const Landing = () => {
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(false)
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  useEffect(
    () => void setInterval(() => setIndex((state) => (state + 1) % 5), 4000),
    [],
  )

  return (
    <div className="landing">
      <video id="hero-video" loop autoPlay>
        <source src={heroVideo} type="video/mp4" />
        <source src={heroVideo} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="description-box">
        <h1>
          Wei | Programming <Badge variant="secondary">DEV</Badge>
        </h1>
        <p>Passion . Reality . Creation</p>
        <a href={pdfs.resume} className="btn btn-lg btn-outline-light">
          Resume
        </a>
      </div>
    </div>
  )
}

export default Landing
