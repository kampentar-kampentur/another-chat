import Button from '@mui/material/Button';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import {
	HeaderAppBarStyle,
	HeaderButtonsWrapperStyle,
	HeaderIconButtonStyle,
	HeaderToolbarStyle,
} from './styles';

const Header = () => {
	return (
		<HeaderAppBarStyle position="static" elevation={0}>
			<HeaderToolbarStyle>
				<HeaderIconButtonStyle edge="start" color="primary">
					<SpaceDashboardIcon fontSize="medium" />
				</HeaderIconButtonStyle>
				<HeaderButtonsWrapperStyle>
					<Button variant="outlined">Login</Button>
					<Button variant="contained">Registration</Button>
				</HeaderButtonsWrapperStyle>
			</HeaderToolbarStyle>
		</HeaderAppBarStyle>
	);
};

export default Header;
