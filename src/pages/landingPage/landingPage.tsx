import { useLandingPageHelper } from './landingPage.helper';
import { Card, Switch } from '@nextui-org/react';
import { Block, PageBase } from '../../components';
import { rem } from '../../helpers';

export const LandingPage: React.FC = () => {
	const { resources, handleOnSwitchChange, isDark } = useLandingPageHelper();
	return (
		<PageBase>
			<Block align={{ horizontal: 'start' }}>Test</Block>

			<Block stack style={{ height: '100%', justifyContent: 'space-evenly' }}>
				<Block align={{ horizontal: 'center' }}>
					<Card color="secondary" style={{ width: rem(350), height: rem(250), display: 'flex' }}>
						<Block stack style={{ height: '100%', justifyContent: 'space-evenly' }}>
							<Block align={{ horizontal: 'center' }}>
								<Switch checked={isDark} onChange={handleOnSwitchChange} />
							</Block>
						</Block>
					</Card>
				</Block>
			</Block>
		</PageBase>
	);
};
