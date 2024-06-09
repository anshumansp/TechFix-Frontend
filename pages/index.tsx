import Seo from '@/components/common/Seo';
import BrandsSection from '@/components/home/BrandsSection';
import FaqSection from '@/components/home/FaqSection';
import HeroSection from '@/components/home/HeroSection';
import ReviewsSection from '@/components/home/ReviewsSection';
import TfsSupportSection from '@/components/home/TfsSupportSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import WhatWeServeSection from '@/components/home/WhatWeServeSection';
import WhoWeAreSection from '@/components/home/WhoWeAreSection';

export default function Home() {
	return (
		<div>
			<Seo title="Home" />
			<HeroSection />
			<div id="secondSection">
				<BrandsSection />
			</div>
			<WhoWeAreSection />
			<WhatWeDoSection />
			<WhatWeServeSection />
			<TfsSupportSection />
			<ReviewsSection />
			<FaqSection />
		</div>
	);
}
