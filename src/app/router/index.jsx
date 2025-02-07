import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { WelcomePage } from '@pages/welcome';
import { ChatPage } from '@pages/chat';
import { MainLayout } from '@layouts/MainLayout';

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/welcome" element={<WelcomePage />} />
					<Route path="/chat/*" element={<ChatPage />} />
					<Route path="*" element={<Navigate to="/welcome" replace />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Router;
