import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#000000',
		},
		secondary: {
			main: '#ffffff',
			light: '#dddddd',
		},
	},
});

export default theme;
