import Image from 'next/image'
import Link from 'next/link'
import table from '@/public/pictures/table.jpg'
import image3 from '@/public/pictures/image3.jpg'
import image4 from '@/public/pictures/image4.png'
import image5 from '@/public/pictures/image5.png'
import image6 from '@/public/pictures/image6.png'

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
          <h2 className="text-3xl font-bold mb-4">À propos de moi</h2>
          <p><strong>Nom:</strong> [BOURAS RAMZI]</p>
          <p><strong>Domaine:</strong> [INFORMATIQUE]</p>
          <p><strong>Profession/Études:</strong> [étudiant en informatique spesialité Ingénierie des Données et Technologie Web]</p>
          <p><strong>Compétences clés:</strong> [Vos compétences clés]</p>
          <p><strong>Projets:</strong> Travaillé sur des projets intéressants tels que [Nom du projet]</p>
          <p><strong>Centres d'intérêt:</strong> [Vos centres d'intérêt]</p>
          <p><strong>Engagements bénévoles:</strong> S'engage dans des activités bénévoles pour [Cause ou organisation]</p>
          <p><strong>Objectif professionnel:</strong> [Vos objectifs professionnels]</p>
          <p><strong>Traits de personnalité:</strong> [Traits de personnalité]</p>
          <p><strong>Passion:</strong> Passionné(e) par [Ce qui vous motive]</p>
        </div>
        <div className="about-image">
          <Image src={image6} alt="Votre Photo" />
        </div>
      </div>
    </section>

    <section id="skills" className="mb-8">
      <h2 className="text-3xl font-bold mb-4">Compétences</h2>
      <ul>
        <li><strong>Langages de programmation:</strong> JavaScript, Python, Java</li>
        <li><strong>Frameworks:</strong> React, Django</li>
        <li><strong>Outils de développement:</strong> Git, VS Code</li>
        <li><strong>Compétences en design:</strong> HTML, CSS, UI/UX</li>
        <li><strong>Autres:</strong> Résolution de problèmes, Travail d'équipe</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">Projets Réalisés</h3>
      <ul>
        <li>Projet ABC - Gestionnaire de tâches avec React</li>
        <li>Projet XYZ - Site Web dynamique avec Django</li>
      </ul>

      <h3 className="text-xl font-bold mb-2">Certifications</h3>
      <p>Certification en développement web avancé - [Nom de l'organisme]</p>

      <h3 className="text-xl font-bold mb-2">Formations Complémentaires</h3>
      <p>Formation en design d'interface utilisateur - [Nom de l'institution]</p>

      <h3 className="text-xl font-bold mb-2">Langues</h3>
      <p>Français (langue maternelle), Anglais (courant)</p>
    </section>

    <section id="hire-me" className="mb-8">
      <h2 className="text-3xl font-bold mb-4">Engagez-moi</h2>
      <p>Je suis actuellement ouvert(e) à de nouvelles opportunités professionnelles. Avec des compétences solides en développement web et une passion pour [domaine spécifique], je suis prêt(e) à relever de nouveaux défis. Mon expertise comprend [compétences clés] et je suis particulièrement intéressé(e) par des projets liés à [domaines d'expertise].</p>
      <p>N'hésitez pas à me contacter si vous recherchez un professionnel engagé et passionné pour votre équipe ou votre projet. Vous pouvez me joindre par e-mail à [votre@email.com] ou via le formulaire de contact sur mon <a href="[lien vers votre portfolio]">portfolio en ligne</a>.</p>
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
