import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PublicLayout() {
	return (
		<>
			<Navbar />
			<main className="pt-16 md:pt-1">
        <Outlet />
      </main>
			<Footer />
		</>
	);
}
