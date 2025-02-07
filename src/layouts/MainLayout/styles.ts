import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { SIDEBAR_WIDTH } from '@shared/constants/layout/sidebarConstants';

export const MainStyle = styled(Box)(({ isOpen }) => ({
	flexGrow: 1,
	transition: 'margin 1s ease-in-out',
	marginLeft: isOpen ? `${SIDEBAR_WIDTH}px` : '0px',
	width: `calc(100% - ${isOpen ? SIDEBAR_WIDTH : 0}px)`,
}));
