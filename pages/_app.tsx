import '@/styles/globals.css';
import 'aos/dist/aos.css';

import AOS from 'aos';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useEffect } from 'react';

import MainLayout from '@/components/layouts/main/Layout';
import { Toaster } from '@/components/ui/sonner';
import { PageConfigurationContextProvider } from '@/hooks/usePageConfiguration';

gsap.registerPlugin(ScrollTrigger);
const inter = Inter({ subsets: ['latin'], variable: '--body-font' });

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			easing: 'ease-out-cubic',
		});
	});
	return (
		<>
			{/* eslint-disable-next-line react/no-unknown-property */}
			<style jsx global>{`
				html {
					font-family: ${inter.style.fontFamily};
				}
			`}</style>
			<Head>
				<link rel="icon" type="image/png" href={'/logos/logo.png'} />
			</Head>
			<PageConfigurationContextProvider>
				<MainLayout>
					<Component {...pageProps} />
					<Toaster richColors closeButton position="top-right" />
				</MainLayout>
			</PageConfigurationContextProvider>
		</>
	);
}
