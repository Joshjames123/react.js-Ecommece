//React bootstraps composnets
import { Button, Row, Col, Carousel, Container } from 'react-bootstrap';


export default function Banner(props) {
	return (
	<Container>	
		<Row>
			<Col className="p-5 mt-5" md={4}>

				<h1 className="pt-5">Welcome to</h1>
				<h1 className="mb-3">Shop@Jjbro!</h1>
				
				<p className="mb-3">Shop your Electronic Devices</p>
				<Button variant="info">Products</Button>
			</Col>
			<Col className="p-5 mt-5">
				<Carousel className="Carousel">
				  <Carousel.Item interval={1000}>
				    <img
				      className="w-100 Carousel1"
				      src="https://m.media-amazon.com/images/I/814GxhunmDL._AC_SL1500_.jpg"
				      alt="First slide"
				    />

				  </Carousel.Item>
				  <Carousel.Item interval={500}>
				    <img
				      className="d-block w-100 Carousel1"
				      src="https://m.media-amazon.com/images/I/71tyxol6XZL._AC_SL1500_.jpg"
				      alt="Second slide"
				    />

				  </Carousel.Item>
				  <Carousel.Item>
				    <img
				      className="d-block w-100 Carousel1"
				      src="https://m.media-amazon.com/images/I/81wm88ThUsL._AC_SL1500_.jpg"
				      alt="Third slide"
				    />

				  </Carousel.Item>
				</Carousel>
			</Col>
		</Row>
	</Container>

		)
}