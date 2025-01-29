import { Outlet } from 'react-router';
import Header from '@shared/ui/Header';

export const BaseLayout = () => {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
		</>
	);
};
