import { Box, Typography } from '@mui/material';
import { useSidebar } from '@shared/hooks/ui/useSidebar';
import { SidebarDrawerStyle } from './styles';

export const Sidebar = () => {
	const { isOpen } = useSidebar();

	return (
		<SidebarDrawerStyle variant="persistent" open={isOpen} isOpen={isOpen}>
			<Box sx={{ p: 2 }}>
				<Typography variant="h6">Меню</Typography>
				<Typography>Элементы сайдбара...</Typography>
			</Box>
		</SidebarDrawerStyle>
	);
};
