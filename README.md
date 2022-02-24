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

##### Currently working on the navbar
