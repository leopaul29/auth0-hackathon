import { h } from 'preact';
import { Link } from 'preact-router/match';
import LoginButton from '../LoginButton';
import LogoutButton from '../logoutButton';
import style from './style.css';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
	const { user, isAuthenticated, isLoading } = useAuth0();
	
	return (
		<header class={style.header}>
			<h1>Quiz App</h1>
			<nav>
				{isLoading && (
					<div>Loading ...</div>
				)}
				
				{!isAuthenticated && (
				<div>
					<Link activeClassName={style.active} href="/">Home2</Link>
					<Link><LoginButton /></Link>
				</div>
				)}
				{isAuthenticated && (
				<div>
					<Link activeClassName={style.active} href="/">Home</Link>
					<Link activeClassName={style.active} href={"/profile/"+user.nickname}>{user.nickname}</Link>	
					<Link><LogoutButton /></Link>
				</div>
				)}
			</nav>
		</header>
	);
}

export default Header;
