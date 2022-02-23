import { useLandingPageHelper } from './landingPage.helper';
import { Card, Switch } from '@nextui-org/react';
import { Block, PageBase } from '../../components';
import { rem } from '../../helpers';
import useDarkMode from 'use-dark-mode';

export const LandingPage: React.FC = () => {
	const { resources } = useLandingPageHelper();
	const darkMode = useDarkMode(false);
	return (
		<PageBase>
			<Block align={{ horizontal: 'start' }}>Test</Block>

			<Block stack style={{ height: '100%', justifyContent: 'space-evenly' }}>
				<Block align={{ horizontal: 'center' }}>
					<Card
						css={{ backgroundColor: '$myDarkColor' }}
						style={{ width: rem(350), height: rem(250), display: 'flex' }}
					>
						<Block stack style={{ height: '100%', justifyContent: 'space-evenly' }}>
							<Block align={{ horizontal: 'center' }}>
								<Switch checked={darkMode.value} onChange={() => darkMode.toggle()} />
							</Block>
						</Block>
					</Card>
				</Block>
			</Block>
		</PageBase>
	);
};
