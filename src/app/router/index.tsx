import { BrowserRouter, Routes, Route } from 'react-router';
import WelcomePage from '@pages/welcome';
import ChatPage from '@pages/chat';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<WelcomePage />} />
				<Route path="/chat/*" element={<ChatPage />} />
			</Routes>
		</BrowserRouter>
	);
}
