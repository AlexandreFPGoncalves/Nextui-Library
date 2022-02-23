import { Container } from '@nextui-org/react';

interface PageBaseProps {
	style?: React.CSSProperties;
}

export const PageBase: React.FC<PageBaseProps> = ({ children, style }) => {
	return (
		<Container style={style}>
			<Container style={{ display: 'flex', minHeight: '100vh' }}>
				<main style={{ display: 'flex', flexDirection: 'column', flex: '0px' }}>{children}</main>
			</Container>
		</Container>
	);
};
