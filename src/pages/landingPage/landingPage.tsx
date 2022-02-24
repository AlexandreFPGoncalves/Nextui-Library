import { useLandingPageHelper } from './landingPage.helper';
import { Card, Switch, Grid, Text } from '@nextui-org/react';
import { Block, PageBase } from '../../components';
import { rem } from '../../helpers';
import useDarkMode from 'use-dark-mode';
import { icons } from '../../assets';
export const LandingPage: React.FC = () => {
	const { resources } = useLandingPageHelper();
	const darkMode = useDarkMode(false);
	return (
		<PageBase>
			<Grid.Container gap={2} justify="center">
				<Grid xs={4}>
					<Block stack style={{ backgroundColor: '$myDarkColor' }}>
						<Block>
							<img
								style={{ width: rem(24), height: rem(24), marginTop: rem(4) }}
								src={darkMode.value ? icons.brackets_light : icons.brackets_dark}
							/>
							<Text b size={rem(20)} transform="capitalize" style={{ marginLeft: rem(10) }}>
								NextUI
							</Text>
						</Block>
					</Block>
				</Grid>
				<Grid xs={4}>
					<Card css={{ backgroundColor: '$myDarkColor' }} />
				</Grid>
				<Grid xs={4}>
					<Block stack style={{ backgroundColor: '$myDarkColor' }}>
						<Block>
							<a onClick={() => darkMode.toggle()}>
								<img
									style={{ width: rem(32), height: rem(32) }}
									src={darkMode.value ? icons.github_light : icons.github_dark}
								/>
							</a>

							<a onClick={() => darkMode.toggle()}>
								<img style={{ marginLeft: rem(10) }} src={darkMode.value ? icons.sun : icons.moon} />
							</a>
						</Block>
					</Block>
				</Grid>
			</Grid.Container>

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
