import { SidebarContext } from '@shared/context/ContextSidebar';
import { useContext } from 'react';

export const useSidebar = () => useContext(SidebarContext);
