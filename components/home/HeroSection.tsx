import Typewriter from 'typewriter-effect';

import Icons from '../ui/icons';
const HeroSection = () => {
	return (
		<div className='relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-[url("/assets/home-hero-bg.png")] bg-cover p-4'>
			<h1 className="mt-8 w-full text-center font-[NeueMachina] text-4xl font-bold uppercase text-white md:text-8xl">
				MASTERING{' '}
				<span className="text-primary-500 uppercase">
					<Typewriter
						options={{
							autoStart: true,
							loop: true,
							strings: ['TECH FIXES', 'Computer Services', 'Networking Services'],
						}}
						onInit={typewriter => {
							typewriter.typeString('TECH FIXES').pauseFor(500).deleteAll().start();
						}}
					/>
				</span>
				EMPOWERING YOUR SUCCESS
			</h1>
			<a href="#secondSection" className="absolute bottom-12 right-12 rotate-90 text-white">
				<Icons.ArrowTopRight />
			</a>
		</div>
	);
};

export default HeroSection;
