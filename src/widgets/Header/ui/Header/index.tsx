import { Link } from 'react-router-dom';
import { SidebarToggleButton } from '@features/SidebarToggleButton';
import { BaseHeader } from '@shared/ui/BaseHeader';
import Button from '@mui/material/Button';
import { HeaderButtonsWrapperStyle } from './styles';

export const Header = () => {
	return (
		<BaseHeader>
			<SidebarToggleButton />
			<HeaderButtonsWrapperStyle>
				<Button component={Link} to="/" variant="outlined">
					Login
				</Button>
				<Button component={Link} to="/" variant="contained">
					Registration
				</Button>
			</HeaderButtonsWrapperStyle>
		</BaseHeader>
	);
};

export default Header;
