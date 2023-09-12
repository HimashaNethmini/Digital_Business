import Navbar from '@/src/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import Whatwedo from '@/src/components/Whatwedo/Whatwedo';

export default function Home() {
  //homepage
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <BrandingVideo />
      <Whatwedo />
    </div>
  );
}
