import {Card, Col, Row} from "react-bootstrap";
import styles from '../css/Home.module.css'
import aboutImage from '../images/about-img.jpg'
import housekeepingImage from '../images/housekeeping-image.jpg'
import travelingImage from '../images/traveling-image.jpg'
import blogImage from '../images/blog-image.jpg'
import projectsImage from '../images/projects.jpg'
import contactImage from '../images/contact-image.jpg'
import {useNavigate} from "react-router-dom";

export default function Home() {
    let navigate = useNavigate()

    return (
        <div className={styles.homePage + " d-flex justify-content-center align-items-center mt-5 mb-5 m-auto"}>
            <Row xs={1} lg={2} xxl={3} className="g-4">
                <Col>
                    <Card className={styles.hoverEffect} onClick={() => navigate('/About')}>
                        <Card.Img variant="top" src={aboutImage} width="300px" height="300px" className={styles.image}/>
                        <Card.Body>
                            <Card.Title>O mně</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={styles.hoverEffect} onClick={() => navigate('/Housekeeping')}>
                        <Card.Img variant="top" src={housekeepingImage} width="300px" height="300px" className={styles.image}/>
                        <Card.Body>
                            <Card.Title>Uklízení</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={styles.hoverEffect} onClick={() => navigate('/Traveling')}>
                        <Card.Img variant="top" src={travelingImage} width="300px" height="300px" className={styles.image}/>
                        <Card.Body>
                            <Card.Title>Cestování</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={styles.hoverEffect} onClick={() => navigate('/Blog')}>
                        <Card.Img variant="top" src={blogImage} width="300px" height="300px" className={styles.image}/>
                        <Card.Body>
                            <Card.Title>Blog</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={styles.hoverEffect} onClick={() => navigate('/Projects')}>
                        <Card.Img variant="top" src={projectsImage} width="300px" height="300px" className={styles.image}/>
                        <Card.Body>
                            <Card.Title>Projekty</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className={styles.hoverEffect} onClick={() => navigate('/Contact')}>
                        <Card.Img variant="top" src={contactImage} width="300px" height="300px" className={styles.image}/>
                        <Card.Body>
                            <Card.Title>Kontakt</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}