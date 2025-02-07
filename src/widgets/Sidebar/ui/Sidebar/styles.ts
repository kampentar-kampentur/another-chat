import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';
import { SIDEBAR_WIDTH } from '@shared/constants/layout/sidebarConstants';

export const SidebarDrawerStyle = styled(Drawer)(({ isOpen }) => ({
	width: isOpen ? SIDEBAR_WIDTH : 0,
	height: '100vh',
	flexShrink: 0,
	'& .MuiDrawer-paper': {
		width: SIDEBAR_WIDTH,
		height: '100%',
		position: 'relative',
	},
}));
