import Gallery from '../../components/Gallery';

export default function GalleryPage() {
  return (
    <section className="section container">
      <h1 className="section-title">Our Gallery</h1>
      <p className="gallery-intro">
        Take a look at some moments captured during our fishing journeys. From impressive catches to 
        beautiful ocean scenery, these images showcase the experience of commercial fishing with Ocean Harvest.
      </p>
      <Gallery />
    </section>
  );
}