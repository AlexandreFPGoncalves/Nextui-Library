import { Button } from '@nextui-org/react';
import { Block } from '../../components';
import { rem } from '../../helpers';

interface FollowButtonProps {
	followButtonText: string;
	unfollowButtonText: string;
	isFollowing: boolean;
	onClick: () => void;
	buttonMarginLeft?: number;
	verticalAlign?: 'start' | 'center' | 'end';
	horizontalAlign?: 'start' | 'center' | 'end';
}

export const FollowButton: React.FC<FollowButtonProps> = ({
	followButtonText,
	unfollowButtonText,
	isFollowing,
	onClick,
	buttonMarginLeft,
	verticalAlign,
	horizontalAlign,
}) => {
	return (
		<Block
			align={{
				vertical: verticalAlign ? verticalAlign : 'center',
				horizontal: horizontalAlign ? horizontalAlign : 'start',
			}}
			style={{ width: '100%' }}
		>
			{isFollowing === true ? (
				<Button
					auto
					ghost
					rounded
					color="secondary"
					onClick={onClick}
					style={{ marginLeft: rem(buttonMarginLeft ? buttonMarginLeft : 0) }}
				>
					{unfollowButtonText}
				</Button>
			) : (
				<Button
					auto
					color="secondary"
					rounded
					onClick={onClick}
					style={{ marginLeft: rem(buttonMarginLeft ? buttonMarginLeft : 0) }}
				>
					{followButtonText}
				</Button>
			)}
		</Block>
	);
};
