"use client";

import React from 'react'
import scene1 from '@/public/pictures/scene.gif'
import Image from 'next/image'
import Link from 'next/link'
import '@/css/style/tp2/style.css'

function scene() {
  return (
    <div className="container">
    <h1>Ma Page Web avec un GIF</h1>
    <Image src={scene1} alt="Votre Photo" />
  </div>
  )
}

export default scene