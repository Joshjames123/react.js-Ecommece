import {useContext, useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import UserContext from '../UserContext'



export default function Logout() {

	const {unsetUser, setUser} = useContext(UserContext);

	//clear the localStorage of the user's information
	unsetUser()

	//set the user state back to it's original value
	useEffect(() => {
		setUser({
			accessToken: null
		})
	}, [])

	//to delete the items in the localStorage
	//localStorage.clear();

	return(


		<Navigate to="/" />
		)
}