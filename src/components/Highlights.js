import { Row, Col, Card} from 'react-bootstrap';
import React from 'react';


export default function Highlights(){
	return(

		<Row>
			<Col xs={12} md={4}>
				<Card className="cardHighlight p-3">
					<Card.Body>
						<Card.Title>
							<h2>Learn From Home</h2>
						</Card.Title>
						<img src='https://m.media-amazon.com/images/I/81PbOX7ZtaL._AC_SL1500_.jpg' className='img-fluid shadow-4' alt='...' />
						<Card.Text>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus qui corporis, provident unde reprehenderit quod incidunt error expedita nihil voluptas eos. Facilis consectetur repellendus corrupti impedit harum magnam ad. lorem  ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus qui corporis, provident unde reprehenderit quod incidunt error expedita nihil voluptas eos. Facilis consectetur repellendus corrupti impedit harum magnam ad. lorem	
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>

			<Col xs={12} md={4}>
				<Card className="cardHighlight p-3">
					<Card.Body>
						<Card.Title>
							<h2>Study Now, Pay Later</h2>
						</Card.Title>

						<Card.Text>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus qui corporis, provident unde reprehenderit quod incidunt error expedita nihil voluptas eos. Facilis consectetur repellendus corrupti impedit harum magnam ad.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>

			<Col xs={12} md={4}>
				<Card className="cardHighlight p-3">
					<Card.Body>
						<Card.Title>
							<h2>Be Part of Our Community</h2>
						</Card.Title>

						<Card.Text>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi possimus qui corporis, provident unde reprehenderit quod incidunt error expedita nihil voluptas eos. Facilis consectetur repellendus corrupti impedit harum magnam ad.
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>

		</Row>
		)
}