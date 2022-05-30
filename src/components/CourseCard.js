import {useState, useEffect} from 'react';
import { Card, Button, Row, Col,} from 'react-bootstrap';
import PropTypes from 'prop-types';


export default function CourseCard({courseProp}) {
	//console.log(props)

	//Deconstruct the couse properties into their own variable
	const {name, description, price} = courseProp

	//use the state hook for this component to be able to store its value
	//states are use to keep track of onformation related to individual components
	//SYNTAX: 
		//const [currentValue(getter), UpdateValue(setter)] = useState(initialGetterValue)

		const [count, setCount] = useState(0);
		//Set the available seats for enrollees
		const [seat, setSeat] = useState(30);

		//for the enable.disable of enroll button
		const [isOpen, setIsOpen] = useState(true)

		useEffect(() => {
			if(seat === 0){
				setIsOpen(false)
			}
		}, [seat])


		function enroll() {
				setCount(count + 1);
				console.log('Enrollees: ' + count);
				setSeat(seat -1);
				console.log('seats available' + seat);	

		}

	return(

				<Card className="CourseCard my-4">
					<Card.Body>
						<Card.Title> {name} </Card.Title>

						<Card.Subtitle>Description:</Card.Subtitle>
						<Card.Text>{description}.</Card.Text>

						<Card.Subtitle>Price:</Card.Subtitle>
						<Card.Text>{price}</Card.Text>

						<Card.Text>Enrolleess: {count} </Card.Text>
						<Card.Text>Seats Available: {seat} </Card.Text>

						{isOpen ? 
							<Button variant="primary" onClick={enroll} >Add</Button>

							:

							<Button variant="primary" onClick={enroll} disabled>Add</Button>
						}
						
						
					</Card.Body>
				</Card>

		)
}



//Check if the courseCard component is getting the correct prop types
//Proptypes are used for validating information passed to a component and is a tool normaly used to help developers en sure the correct information is passed from one component to another

CourseCard.propTypes = {

	courseProp: PropTypes.shape({
		//define the properties and their expected types
		name: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		price: PropTypes.number.isRequired
	})
}