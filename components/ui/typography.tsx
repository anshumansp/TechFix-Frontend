import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const defClassName = 'font-heading text-foreground text-lg font-bold';

const typographyVariants = cva(defClassName, {
	variants: {
		variant: {
			h1: 'text-8xl',
			'h1-1': 'text-[86px]',
			h2: 'text-[54px] md:text-7xl',
			h3: 'text-[54px]',
			h4: 'text-5xl font-semibold',
			h5: 'text-4xl',
			h6: 'text-2xl',
			p: 'font-sans font-normal',
		},
	},
	defaultVariants: {
		variant: 'p',
	},
});

type TypographyElement = HTMLHeadingElement | HTMLParagraphElement;

export interface TypographyProps
	extends React.HTMLAttributes<TypographyElement>,
		VariantProps<typeof typographyVariants> {
	asChild?: boolean;
	as?: typographyTags;
}

const getComponent = (variant: VariantProps<typeof typographyVariants>['variant']) => {
	switch (variant) {
		case 'h1':
			return 'h1';
		case 'h2':
			return 'h2';
		case 'h3':
			return 'h3';
		case 'h4':
			return 'h4';
		case 'h5':
			return 'h5';
		default:
			return 'p';
	}
};

type typographyTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

const Typography = React.forwardRef<TypographyElement, TypographyProps>(
	({ className, variant, as, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : as ? as : getComponent(variant);
		return <Comp className={cn(typographyVariants({ variant }), className)} ref={ref} {...props} />;
	}
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
