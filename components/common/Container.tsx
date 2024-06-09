import React, { PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

const Container = ({ children, className }: PropsWithChildren<{ className: string }>) => {
	return <div className={cn('mx-auto max-w-5xl', className)}>{children}</div>;
};

export default Container;
