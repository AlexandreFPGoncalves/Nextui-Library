import { changeTheme, createTheme, useTheme } from '@nextui-org/react';
import { useMemo, useState } from 'react';

interface LandingPageProps {
	resources: LandingPageResources;
	handleOnSwitchChange: () => void;
	isDark: boolean | undefined;
}

export interface LandingPageResources {
	title: string;
}

export const useLandingPageHelper = (): LandingPageProps => {
	const { type, isDark } = useTheme();

	const handleOnSwitchChange = () => {
		const nextTheme = isDark ? 'light' : 'dark';
		window.localStorage.setItem('data-theme', nextTheme); // you can use any storage
		changeTheme(nextTheme);
	};

	const resources = useMemo((): LandingPageResources => {
		return {
			title: 'Hello World',
		};
	}, []);

	return {
		resources,
		handleOnSwitchChange,
		isDark,
	};
};
