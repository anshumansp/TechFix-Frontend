import React, { PropsWithChildren } from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = ({ children }: PropsWithChildren) => {
	return (
		<>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
};

export default MainLayout;
