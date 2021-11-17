import Link from 'next/link'

import LogoutIcon from '@mui/icons-material/PowerSettingsNew'
import { AppBar, IconButton, Toolbar } from '@mui/material'

import { Container, Content, Title, RightContent } from './Header.styled'

export interface HeaderProps {
	handleLogout: () => void
	authenticated?: boolean
}

export const Header = ({ handleLogout, authenticated = false }: HeaderProps) => (
	<AppBar color="transparent" variant="outlined" elevation={0} position="static">
		<Toolbar>
			<Container>
				<Content>
					<Link href="/" passHref>
						<Title variant="h1">Up Meal</Title>
					</Link>
				</Content>
				{authenticated && (
					<RightContent>
						<IconButton onClick={handleLogout}>
							<LogoutIcon />
						</IconButton>
					</RightContent>
				)}
			</Container>
		</Toolbar>
	</AppBar>
)

export default Header
