import '../styles/Gallery.css';
import Image from 'next/image';

export default function Gallery() {
  // In a real app, you would fetch this data or import it
  const galleryImages = [
    { id: 1, src: '/assets/gallery1.jpg', alt: 'Fresh catch of the day' },
    { id: 2, src: '/assets/gallery14.jpg', alt: 'Ocean fishing experience' },
    { id: 3, src: '/assets/gallery17.jpg', alt: 'Commercial fishing boat' },
    { id: 4, src: '/assets/gallery5.jpg', alt: 'Beautiful sunset on the water' },
    { id: 5, src: '/assets/gallery6.jpg', alt: 'Team working on deck' },
    { id: 6, src: '/assets/gallery7.jpg', alt: 'Close-up of catch' },
    { id: 7, src: '/assets/gallery8.jpg', alt: 'Fishing gear and equipment' },
    { id: 8, src: '/assets/gallery27.png', alt: 'Family fishing trip' },
    { id: 9, src: '/assets/gallery10.jpg', alt: 'Fishing in the sunset' },
    { id: 10, src: '/assets/gallery11.jpg', alt: 'Ocean waves and fishing boat' },
    { id: 11, src: '/assets/gallery12.jpg', alt: 'Fishing crew celebrating' },
    { id: 12, src: '/assets/gallery13.jpg', alt: 'Catch of the day' },
    { id: 13, src: '/assets/gallery2.jpg', alt: 'Fishing in the morning' },
    { id: 13, src: '/assets/gallery15.jpg', alt: 'Fishing in the morningg' },
    { id: 15, src: '/assets/gallery16.jpg', alt: 'Ocean fishing adventure' },
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
