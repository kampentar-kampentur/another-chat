import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export const BaseHeaderAppBarStyle = styled(AppBar)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	color: theme.palette.primary.main,
	borderBottom: `1px solid ${theme.palette.secondary.light}`,
}));

export const BaseHeaderToolbarStyle = styled(Toolbar)(() => ({
	minHeight: '48px',
	'@media (min-width: 600px)': {
		minHeight: '48px',
	},
}));
