import { h } from 'preact';
import {useEffect, useState} from "preact/hooks";
import ProfileAuth from '../../components/profile';
import style from './style.css';

// Note: `user` comes from the URL, courtesy of our router
const Profile = ({ user }) => {
	
	return (
		<div class={style.profile}>
			<h1>Profile: {user}</h1>
			<p>This is the user profile for a user named { user }.</p>

			<ProfileAuth/>
		</div>
	);
}

export default Profile;
