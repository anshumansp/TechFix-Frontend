import { useRouter } from 'next/router';
import React, { createContext, PropsWithChildren, SetStateAction, useContext, useEffect, useState } from 'react';

import { ROUTES } from '@/constants/routes';

import { useBoolean } from './useBoolean';

type PageConfigurationContextType = {
	isNavTransparent: boolean;
	navTitle: string | null;
	setNavTitle: React.Dispatch<SetStateAction<string | null>>;
	isMenuOpen: boolean;
	toggleMenuOpen: () => void;
};

export const PageConfigurationContext = createContext<PageConfigurationContextType | null>(null);

export const PageConfigurationContextProvider = ({ children }: PropsWithChildren) => {
	const { value: isMenuOpen, toggle: toggleMenuOpen, setFalse: closeMenu } = useBoolean(false);
	const [isNavTransparent, setIsNavTransparent] = useState(false);
	const { pathname, query } = useRouter();
	const [navTitle, setNavTitle] = useState<string | null>(null);

	useEffect(() => {
		if (pathname === ROUTES.HOME || pathname === ROUTES.ABOUT_US) {
			setIsNavTransparent(true);
		} else {
			setIsNavTransparent(false);
		}
	}, [pathname, closeMenu]);

	useEffect(() => {
		closeMenu();
	}, [closeMenu, pathname, query]);

	const context: PageConfigurationContextType = { isNavTransparent, navTitle, setNavTitle, isMenuOpen, toggleMenuOpen };
	return <PageConfigurationContext.Provider value={context}>{children}</PageConfigurationContext.Provider>;
};

const usePageConfiguration = () => {
	const context = useContext(PageConfigurationContext);
	if (context === null) {
		throw new Error('PageConfigurationContext must be used inside PageConfigurationContextProvider');
	}
	return context;
};

export default usePageConfiguration;
