import  styles from '@/styles/globals.css' ;
import Hero from '@/components/VantaBackground.jsx' ;
import Navbar from '@/components/Navbar';
import VantaBackground from '@/components/VantaBackground.jsx';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Virendra_portfolio',
  description: 'Portfolio of Virendra, Web Developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        
          <Navbar/>
            <main style={{paddingTop:'80px'}}>{children}</main>
         <Footer/>
      </body>
    </html>
  );
}
