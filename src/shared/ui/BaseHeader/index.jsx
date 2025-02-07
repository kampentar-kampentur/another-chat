import { BaseHeaderAppBarStyle, BaseHeaderToolbarStyle } from './styles';

export const BaseHeader = ({ children }) => {
	return (
		<BaseHeaderAppBarStyle position="static" elevation={0}>
			<BaseHeaderToolbarStyle>{children}</BaseHeaderToolbarStyle>
		</BaseHeaderAppBarStyle>
	);
};
