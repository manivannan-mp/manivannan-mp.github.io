import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main" className="section">
        <div className="wrap">
          <p>Layout &amp; primitives in place — page ports next.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
