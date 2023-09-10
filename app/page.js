import Navbar from '@/src/utils/components/Navbar/Navbar';
import './page.css'
import Hero from '@/src/utils/components/Hero/Hero';
export default function Home() {

  //homepage
  
  return (
    <div className="app">
      <Navbar />
      <Hero />
    </div>
  );
}
