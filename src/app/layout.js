import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Virendra Vikram Singh | Portfolio',
  description: 'Portfolio of Virendra Vikram Singh, web developer and AI enthusiast.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><Navbar /><main>{children}</main><Footer /></body></html>;
}
