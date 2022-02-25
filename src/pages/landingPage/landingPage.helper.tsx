import { changeTheme, createTheme, useTheme } from '@nextui-org/react';
import { useMemo, useState } from 'react';

interface LandingPageProps {
	resources: LandingPageResources;
	isFollowing: boolean;
	handleFollowButtonOnClick: () => void;
}

export interface LandingPageResources {
	username: string;
	uniqueName: string;
	followBtn: string;
	unfollowBtn: string;
}

export const useLandingPageHelper = (): LandingPageProps => {
	const [isFollowing, setIsFollowig] = useState(false);

	const resources = useMemo((): LandingPageResources => {
		return {
			username: 'VioletAlex',
			uniqueName: '@VioletAlex_',
			followBtn: 'Follow',
			unfollowBtn: 'Unfollow',
		};
	}, []);

	const handleFollowButtonOnClick = () => {
		setIsFollowig(!isFollowing);
	};
	return {
		resources,
		isFollowing,
		handleFollowButtonOnClick,
	};
};
