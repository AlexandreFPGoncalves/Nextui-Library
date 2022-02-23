import { changeTheme, createTheme, useTheme } from '@nextui-org/react';
import { useMemo, useState } from 'react';

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
