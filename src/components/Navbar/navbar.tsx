import { Grid } from '@nextui-org/react';
import { Block } from '../../components';
import { rem } from '../../helpers';
import { icons } from '../../assets';
import useDarkMode from 'use-dark-mode';

interface NavbarProps {
	logoTitle: string;
}

export const Navbar: React.FC<NavbarProps> = ({ logoTitle }) => {
	const darkMode = useDarkMode(false);

	return (
		<Grid.Container
			gap={2}
			style={{ padding: '15px 0 0 0', boxShadow: 'var(--shadow-3)' }}
			css={{ backgroundColor: '$navbar' }}
		>
			<Grid xs={6}>
				<Block stack style={{ backgroundColor: '$myDarkColor' }} align={{ horizontal: 'center' }}>
					<Block align={{ horizontal: 'center' }}>
						<img src={darkMode.value ? icons.leftArrow_light : icons.leftArrow_dark} />
						<h3 style={{ marginBottom: rem(5) }}>{logoTitle}</h3>
						<img src={darkMode.value ? icons.rightArrow_light : icons.rightArrow_dark} />
					</Block>
				</Block>
			</Grid>
			<Grid xs={6}>
				<Block style={{ backgroundColor: '$myDarkColor' }} align={{ vertical: 'center' }}>
					<Block align={{ horizontal: 'center' }}>
						<a href="https://github.com/AlexandreFPGoncalves" target="_blank">
							<img
								style={{ width: rem(32), height: rem(32) }}
								src={darkMode.value ? icons.github_light : icons.github_dark}
							/>
						</a>

						<a onClick={() => darkMode.toggle()}>
							<img
								style={{
									width: rem(28),
									height: rem(28),
									marginLeft: rem(24),
									marginTop: darkMode.value ? rem(1) : rem(2),
								}}
								src={darkMode.value ? icons.sun : icons.moon}
							/>
						</a>
					</Block>
				</Block>
			</Grid>
		</Grid.Container>
	);
};
