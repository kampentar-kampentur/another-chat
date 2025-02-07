import { useSidebar } from '@shared/hooks/ui/useSidebar';
import { SidebarToggleButtonStyle } from './styles';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

export const SidebarToggleButton = () => {
	const { toggleSidebar } = useSidebar();

	return (
		<SidebarToggleButtonStyle
			onClick={toggleSidebar}
			edge="start"
			color="primary"
		>
			<SpaceDashboardIcon fontSize="medium" />
		</SidebarToggleButtonStyle>
	);
};
