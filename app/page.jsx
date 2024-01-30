import Image from 'next/image'
import Link from 'next/link'
import table from '@/public/pictures/table.jpg'
import image3 from '@/public/pictures/image3.jpg'
import image4 from '@/public/pictures/image4.png'
import image5 from '@/public/pictures/image5.png'
import image6 from '@/public/pictures/image6.PNG'

import '@/css/style/home/style.css'

export default function Home() {
  return (

<div className="container mx-auto p-4">
<div className="portfolio-title-container">
      <h1 className="portfolio-title">Portfolio</h1>
    </div>
    <br /><br />
    <section id="about" className="mb-8">
      <div className="about-content">
        <div className="about-text">
          <h2 className="text-3xl font-bold mb-4">a propos de moi</h2>
          <p><strong>Nom:</strong> [BOURAS RAMZI]</p>
          <p><strong>Domaine:</strong> [INFORMATIQUE]</p>
          <p><strong>Profession/Études:</strong> [étudiant en informatique spesialité Ingénierie des Données et Technologie Web]</p>
          <p><strong>groupe:</strong> [g01]</p>
        </div>
        <div className="about-image">
          <Image src={image6} alt="Votre Photo" />
        </div>
      </div>
    </section>

        <section id="portfolio" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">github/linkedin</h2>
          <div className="photo-container">
            {/* Add your photos here */}
            <div className="photo">
              <Image src={image4} alt="Photo 1" width={900} height={900} layout="fixed"/>
            </div>
            <div className="photo">
              <Image src={image5} alt="Photo 2" width={900} height={900} layout="fixed"/>
            </div>
            {/* Add more photos as needed */}
          </div>
          <br />
        </section>

        <section id="portfolio" className="mb-8">
          <h2 className="text-3xl font-bold mb-4">web3d labs</h2>
          <div className="photo-container">
            {/* Add your photos here */}
            <div className="photo">
            <p className='text-black'>lab1:la table</p>
              <Link href='/web3d/tp1'>
              <Image src={table} alt="Photo 1" width={900} height={900} layout="fixed" />
              </Link>
            </div>
            <div className="photo">
            <p className='text-black'>la scene </p>
            <Link href='/web3d/tp2'>
            <Image src={image3} alt="Photo " width={900} height={900} layout="fixed" />
              </Link>
            </div>
            {/* Add more photos as needed */}
          </div>
          <br /><br /><br />
        </section>
        <br /><br /><br /><br />
      </div>
  )
}
