import { Outlet } from 'react-router';
import { Sidebar } from '@widgets/Sidebar';
import { Header } from '@widgets/Header';
import { SidebarContextProvider } from '@shared/context/ContextSidebar';
import { useSidebar } from '@shared/hooks/ui/useSidebar';
import Box from '@mui/material/Box';
import { MainStyle } from './styles';

export const MainLayout = () => {
	const { isOpen } = useSidebar();
	return (
		<SidebarContextProvider>
			<Box sx={{ display: 'flex' }}>
				<Sidebar />
				<MainStyle isOpen={isOpen}>
					<Header />
					<Outlet />
				</MainStyle>
			</Box>
		</SidebarContextProvider>
	);
};
