import '../styles/Gallery.css';
import Image from 'next/image';

export default function Gallery() {
  // In a real app, you would fetch this data or import it
  const galleryImages = [
    { id: 1, src: '/assets/gallery1.jpg', alt: 'Fresh catch of the day' },
    { id: 2, src: '/images/gallery/fish2.jpg', alt: 'Ocean fishing experience' },
    { id: 3, src: '/images/gallery/fish3.jpg', alt: 'Commercial fishing boat' },
    { id: 4, src: '/images/gallery/fish4.jpg', alt: 'Beautiful sunset on the water' },
    { id: 5, src: '/images/gallery/fish5.jpg', alt: 'Team working on deck' },
    { id: 6, src: '/images/gallery/fish6.jpg', alt: 'Close-up of catch' },
    { id: 7, src: '/images/gallery/fish7.jpg', alt: 'Fishing gear and equipment' },
    { id: 8, src: '/images/gallery/fish8.jpg', alt: 'Family fishing trip' },
    { id: 9, src: '/images/gallery/fish9.jpg', alt: 'Fishing in the sunset' },
    { id: 10, src: '/images/gallery/fish10.jpg', alt: 'Ocean waves and fishing boat' },
    { id: 11, src: '/images/gallery/fish11.jpg', alt: 'Fishing crew celebrating' },
    { id: 12, src: '/images/gallery/fish12.jpg', alt: 'Catch of the day' },
    { id: 13, src: '/images/gallery/fish13.jpg', alt: 'Fishing in the morning' },
    { id: 14, src: '/images/gallery/fish14.jpg', alt: 'Fishing nets and gear' },
    { id: 15, src: '/images/gallery/fish15.jpg', alt: 'Ocean fishing adventure' },
    // Add more as needed
  ];

  return (
    <div className="gallery">
      {galleryImages.map((image) => (
        <div key={image.id} className="gallery-item">
          <Image 
            src={image.src} 
            alt={image.alt} 
            width={400} 
            height={300} 
            layout="responsive"
          />
        </div>
      ))}
    </div>
  );
}
