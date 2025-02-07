import { FC, ReactNode } from 'react';
import { BaseHeaderAppBarStyle, BaseHeaderToolbarStyle } from './styles';

interface BaseHeaderProps {
	children: ReactNode;
}

export const BaseHeader: FC<BaseHeaderProps> = ({ children }) => {
	return (
		<BaseHeaderAppBarStyle position="static" elevation={0}>
			<BaseHeaderToolbarStyle>{children}</BaseHeaderToolbarStyle>
		</BaseHeaderAppBarStyle>
	);
};
