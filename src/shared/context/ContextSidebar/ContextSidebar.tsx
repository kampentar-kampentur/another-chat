import { createContext } from 'react';

const defaultSidebarContextValue = {
	isOpen: false,
	toggleSidebar: () => {},
	openSidebar: () => {},
	closeSidebar: () => {},
};

export const SidebarContext = createContext(defaultSidebarContextValue);
