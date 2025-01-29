import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

export const HeaderAppBarStyle = styled(AppBar)(({ theme }) => ({
	backgroundColor: theme.palette.secondary.main,
	color: theme.palette.primary.main,
	borderBottom: `1px solid ${theme.palette.secondary.light}`,
}));

export const HeaderToolbarStyle = styled(Toolbar)(() => ({
	minHeight: '48px',
	'@media (min-width: 600px)': {
		minHeight: '48px',
	},
}));

export const HeaderIconButtonStyle = styled(IconButton)(() => ({
	ml: 0,
	borderRadius: 6,
	'&:hover': {
		backgroundColor: 'rgba(0, 0, 0, 0.1)',
	},
}));

export const HeaderButtonsWrapperStyle = styled(Box)(() => ({
	display: 'flex',
	gap: '12px',
	marginLeft: 'auto',
}));
