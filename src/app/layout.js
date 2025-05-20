import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Drifting and Dreaming',
  description: 'Professional commercial fishing services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
