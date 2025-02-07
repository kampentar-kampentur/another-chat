import { FC, ReactNode, useState } from 'react';
import { SidebarContext } from './ContextSidebar';

interface SidebarContextProviderProps {
	children: ReactNode;
}

export const SidebarContextProvider: FC<SidebarContextProviderProps> = ({
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => setIsOpen((prev) => !prev);
	const openSidebar = () => setIsOpen(true);
	const closeSidebar = () => setIsOpen(false);

	return (
		<SidebarContext.Provider
			value={{ isOpen, toggleSidebar, openSidebar, closeSidebar }}
		>
			{children}
		</SidebarContext.Provider>
	);
};
