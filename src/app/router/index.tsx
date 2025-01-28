import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from '@pages/home';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</BrowserRouter>
	);
}
