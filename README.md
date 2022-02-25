### Testing NextUI Design Library

-   [NextUI](https://nextui.org/)
-   [NextUI Components](https://nextui.org/docs/guide/getting-started)

## Install dependencies

In your terminal after you clone your project down, remember to run either `yarn` or `npm install` to build all the dependencies in the project.

## Start the Project

In your terminal after you are done installing the dependencies run `npm start`
<br>
<br>

#### Project Diary

##### imported needed dependecies

-   nextui-org/react
-   react
-   react-dom
-   typescript
-   gh-pages

##### Imported pixel to rem helper

```js
export const rem = (px: number): string => `${Math.round((px + Number.EPSILON) * 1000) / 1000 / 16}rem`;
```

##### Imported but refactoerd initialPage and Block component

-   Now they are using `Containers` from <b>@nextUI</b>

In your terminal after you are done installing the dependencies run `npm start`

##### Base page is created

```js
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
```

##### Light-Dark is working

-   Installed use-dark-mode package
    `npm i use-dark-mode`

###### Imported on App.js :

```js
import { createTheme, NextUIProvider } from '@nextui-org/react';
import useDarkMode from 'use-dark-mode';
```

###### Created both my Light and Dak theme :

```node
const lightTheme = createTheme({
	type: 'light',
});

const darkTheme = createTheme({
	type: 'dark',
	theme: {
		colors: {
			myDarkColor: '#202024',
		},
	},
});
```

###### On my LandingPage I had to import use-dark-mode once again

```js
import useDarkMode from 'use-dark-mode';
```

###### Created a constant that will manage my darkmode

```js
const darkMode = useDarkMode(false);
```

###### My Switch will toggle this constant to change my view mode

```js
<Switch checked={darkMode.value} onChange={() => darkMode.toggle()} />
```

###### Finnaly my components will have their styles based on my view mode

```js
<Card css={{ backgroundColor: darkMode.value ? '$myLightColor' :  '$myDarkColor'}}>
```

##### Navbar completed

-   Firstly I created the navbar directly on my project(now it's allocated on it's own components folder)

-   I worked with the `<Grid.Container> and <Grid>` components from <b>@nextUI</b>

-   It makes use of the useDarkMode explained in the last topic to change it's colors

```js
<Grid.Container
	gap={2}
	style={{ padding: '15px 0 0 0', boxShadow: 'var(--shadow-3)' }}
	css={{
		backgroundColor: '$navbar',
	}}
>
	<Grid xs={6}>
		<Block stack align={{ horizontal: 'center' }} style={{ width: '100%' }}>
			<Block>
				<img src={darkMode.value ? icons.leftArrow_light : icons.leftArrow_dark} />
				<h3 style={{ marginBottom: rem(5) }}>{logoTitle}</h3>
				<img src={darkMode.value ? icons.rightArrow_light : icons.rightArrow_dark} />
			</Block>
		</Block>
	</Grid>
	<Grid xs={6}>
		<Block stack align={{ horizontal: 'center', vertical: 'center' }} style={{ width: '100%' }}>
			<Block>
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
```

##### Working on the card

-   I dont have a full idea of what I want yet, so far I currently have an avatar with username and @name as well as a follow buttons that changes to an unfollow one on click, I created it's component:

```js
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
```

I might add some more information or just leave it as it is.
