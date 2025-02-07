import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

export const SidebarToggleButtonStyle = styled(IconButton)(() => ({
	ml: 0,
	borderRadius: 6,
	'&:hover': {
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	},
}));
