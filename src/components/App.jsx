import Header from './header/Header';
import Footer from './layout/Footer';
import Sidebar from './sidebar/Sidebar';
import ItemList from './item-list/ItemList';
import BackgroundHeading from './layout/BackgroundHeading';

function App() {
	return (
		<>
			<BackgroundHeading />
			<main>
				<Header />
				<ItemList />
				<Sidebar />
			</main>
			<Footer />
		</>
	);
}

export default App;
