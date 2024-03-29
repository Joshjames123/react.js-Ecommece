import UserView from '../components/UserView';
import AdminView from '../components/AdminView';
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';




export default function CoursePage() {

	const [ allCourses, setAllCourses ] = useState([])

	const fetchData = () => {
		fetch('http://localhost:4000/products/all')
		.then(res => res.json())
		.then(data => {
			console.log(data)
			//storing all the data to our useState allCourses
			setAllCourses(data)
		})
	}

	useEffect(() => {
		fetchData()
	}, [])

	
	const { user } = useContext(UserContext);

	return(
		<>
			<h1>Products</h1>

			{(user.isAdmin === true) ?

				<AdminView coursesData={allCourses} fetchData={fetchData}/>

				:

				<UserView coursesData={allCourses} />
			}
		
		</>


		)
}