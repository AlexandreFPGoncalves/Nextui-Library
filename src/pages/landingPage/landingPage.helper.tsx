import { useMemo } from 'react';

interface LandingPageProps {
	resources: LandingPageResources;
}

export interface LandingPageResources {
	title: string;
}

export const useLandingPageHelper = (): LandingPageProps => {
	const resources = useMemo((): LandingPageResources => {
		return {
			title: 'Hello World',
		};
	}, []);

	return {
		resources,
	};
};
