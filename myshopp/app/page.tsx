import Navbar from './src/components/Navbar';
import Footer from './src/components/Footer';

export default function Home() {
  return (
    <>
    <div>
      <Navbar userEmail="teste@teste.com" isAdmin={true} />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Quentin!</h1>
        <p className="text-lg text-gray-700">Explore nosso cardápio e aproveite as delícias que oferecemos.</p>
      </main>
    </div>
    <Footer />
    </>
  );
}
