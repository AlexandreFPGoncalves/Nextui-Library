import { useLandingPageHelper } from './landingPage.helper';
import { Card, Avatar } from '@nextui-org/react';
import { Block, PageBase, Navbar, FollowButton } from '../../components';
import { rem } from '../../helpers';
import useDarkMode from 'use-dark-mode';
import { Images } from '../../assets';

export const LandingPage: React.FC = () => {
	const { resources, isFollowing, handleFollowButtonOnClick } = useLandingPageHelper();
	const darkMode = useDarkMode(false);
	return (
		<PageBase>
			<Navbar logoTitle="NextUI" />
			<Block stack style={{ height: '100%', justifyContent: 'space-evenly' }}>
				<Block align={{ horizontal: 'center' }}>
					<Card style={{ width: rem(380), height: rem(140), display: 'flex', padding: '24px' }}>
						<Block stack style={{ width: '100%' }}>
							<Block>
								<Avatar
									size="xl"
									src={Images.avatar}
									color="secondary"
									bordered
									style={{ cursor: 'pointer' }}
									onClick={() => alert('Test')}
								/>
								<Block stack style={{ marginLeft: rem(10) }} align={{ vertical: 'center' }}>
									<text style={{ fontSize: rem(16), fontWeight: 700 }}>{resources.username}</text>
									<text style={{ fontSize: rem(12), display: 'flex' }}>{resources.uniqueName}</text>
								</Block>

								<FollowButton
									buttonMarginLeft={36}
									followButtonText={resources.followBtn}
									unfollowButtonText={resources.unfollowBtn}
									onClick={handleFollowButtonOnClick}
									isFollowing={isFollowing}
								/>
							</Block>
						</Block>
					</Card>
				</Block>
			</Block>
		</PageBase>
	);
};
