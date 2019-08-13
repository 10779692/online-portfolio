import React from "react";
import logo from "./portfolio_logo.png";
import image from "./image.jpg";
import "./App.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <div className="App">
      <header>
        <div className="section1">
          <Container>
            <Row>
              <Navbar>
                <Navbar.Brand href="#home">
                  <img src={logo} alt="logo" width="50px" height="63px" />
                </Navbar.Brand>
              </Navbar>
            </Row>
          </Container>
        </div>
      </header>
      {/* About Section */}
      <div className="aboutSection">
        <Container>
          <Row>
            <Col sm={4}>
              <img src={image} alt="jared_reed" width="100%" height="100%" />
            </Col>
            <Col sm={8}>
              <ul>
                <li>Jared Reed</li>
                <li>(916) 533-5608</li>
                <li>jared282@gmail.com</li>
                <li>27 Years Old</li>
                <li>
                  Class of 2019 - Utah Valley University - BA in Web Design and
                  Development
                </li>
                <li>
                  <a href="https://linkedin.com/in/jared-reed-a300346a/">
                    Linked In
                  </a>
                </li>
                <br />
                <p>
                  Portfolio site was created using React.js and Bootstrap. I
                  have traveled the world to more than 10 different countries. I
                  am culturally diverse, I believe in being a great person, a
                  team leader, confident, and positive. I started a company
                  called, Moderyn{" "}
                  <a href="https://moderyn.com" target="_blank">
                    [ View Company Website ]
                  </a>
                  , in which currently the company is self sustainable,
                  profitable, and doing well. I have an extensive background in
                  web design for both mobile, tablet and desktop development. I
                  have worked with Sketch, Adobe Photoshop, InDesign and
                  Illustrator. The designs I create are beautiful, modern,
                  responsive, and up-to-date. I have worked with product design
                  as well as web design. Please view my resume{" "}
                  <a
                    href="http://moderyn.com/wp-content/uploads/2019/08/Resume_Jared_Reed.pdf"
                    target="_blank"
                  >
                    [ My Resume ]
                  </a>{" "}
                  and my portfolio of projects I have completed below.{" "}
                </p>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Section 2 */}
      <div className="section2">
        <Container>
          <Row>
            <h2>Wireframes</h2>
          </Row>
          <Row>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Law Firm</Card.Title>
                  <Card.Text>
                    This wireframe was created for a Law Firm.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Brocato-Law-807070.png"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>UVU Digital Media</Card.Title>
                  <Card.Text>
                    This wireframe contains a mock-up of the UVU Digital Media
                    program website, in mobile, tablet and desktop.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Responsive-Surface-Comp-Revision-4.pdf"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Utah Red Cross</Card.Title>
                  <Card.Text>
                    A simple grey and white wireframe for the Utah Red Cross.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Desktop2.pdf"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Utah Digital Cinema - Desktop</Card.Title>
                  <Card.Text>
                    A wireframe built for desktop. A concept created for a
                    digital cinema program for major universities in Utah.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Home-Page-Surface-Comp.pdf"
                      target="_blank"
                    >
                      View Wireframe
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Utah Digital Cinema - Mobile</Card.Title>
                  <Card.Text>
                    Same as the desktop, but now for mobile.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Home-Mobile-Surface-Comp.pdf"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ display: "none" }}>
                <Card.Body>
                  <Card.Title />
                  <Card.Text />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Section 3 */}
      <div className="section3">
        <Container>
          <Row>
            <h2>Development Projects</h2>
          </Row>
          <Row>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Apple Store Product Backlog</Card.Title>
                  <Card.Text>
                    An Apple store product backlog using Prisma, GraphQL, and
                    Rest.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="https://github.com/10779692/vue-front-end"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Node API Server</Card.Title>
                  <Card.Text>
                    A GraphQL API Node project using the ability to retrieve
                    products using different queries.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="https://github.com/10779692/node-api-server"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Vue Crud Server</Card.Title>
                  <Card.Text>
                    A crud server created in VUE and using Postman as well.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="https://github.com/10779692/vue-crud-server"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Phone Gap - Jquery</Card.Title>
                  <Card.Text>
                    A demo version of an app using Phone Gap and Jquery.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="https://github.com/10779692/phone-gap-final"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>GraphQL API Node Server</Card.Title>
                  <Card.Text>
                    Please follow instructions to work the GraphQL node server
                    and retrieve information from it.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="https://github.com/10779692/graphql-server-prisma-client"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>PHP Employee Directory</Card.Title>
                  <Card.Text>
                    A demo employee directory using PHP and Bootstrap.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="https://github.com/10779692/php-employee-directory"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <br />
          <Row>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>XHTML Responsive Email</Card.Title>
                  <Card.Text>
                    A fully responsive email template using XHTML that works in
                    all email clients, including Outlook.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="https://github.com/10779692/html-responsive-email"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ display: "none" }}>
                <Card.Body>
                  <Card.Title>GraphQL API Node Server</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="https://github.com/10779692/graphql-server-prisma-client"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ display: "none" }}>
                <Card.Body>
                  <Card.Title>PHP Employee Directory</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="https://github.com/10779692/php-employee-directory"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Section 4 */}
      <div className="section4">
        <Container>
          <Row>
            <h2>UX Design Work</h2>
          </Row>
          <Row>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>
                    Product Review and Characteristic / Functionality Audit
                  </Card.Title>
                  <Card.Text>A product review of the Amazon Alexa.</Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Product-Review-Characteristic-and-Functionality-Audit-Jared-Reed.pdf"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Typography</Card.Title>
                  <Card.Text>
                    A typography chart to demonstrate font similarity and color
                    theory.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Pattern-Library-1.pdf"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Product Technical Sheet</Card.Title>
                  <Card.Text>
                    A product technical sheet used to help others set up their
                    Google Home.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Technical-Sheet--Harper.pdf"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Image File Formats</Card.Title>
                  <Card.Text>
                    A way to manage your assets and images and what each file
                    format is and does.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Image-Manipulation-Technical-Brief.pdf"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Storyboarding</Card.Title>
                  <Card.Text>
                    A way to show how a storyboard can help aid in the way a
                    website will work.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Storyboarding.pdf"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Format Support Across Devices</Card.Title>
                  <Card.Text>
                    Shows the multiple formats that work across multiple
                    devices.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Format-Support-and-Technology-Assesment.pdf"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Image Compression Process</Card.Title>
                  <Card.Text>
                    A step by step directional to show how to compress images to
                    lower formats for better use on web and file size.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Image-Compression-Evaluation.pdf"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Mood Board</Card.Title>
                  <Card.Text>A simple mood board for style guides.</Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Mood-Board-.pdf"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Project Brief</Card.Title>
                  <Card.Text>
                    A complex, but simple and effective project brief.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Project-Brief.pdf"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br />
          <Row>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Proto Persona</Card.Title>
                  <Card.Text>
                    A proto persona to help aid the process of completing a
                    website or a product.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Proto_Persona_Cards.pdf"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Journey Map</Card.Title>
                  <Card.Text>
                    A journey map to show how a specific user might interact
                    with a product or a website.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Journey_Map_Busy_Parent.pdf"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>Google Home Software Integration</Card.Title>
                  <Card.Text>
                    Analyzing gesture controls during the on-boarding process
                    within the Google Home app.
                  </Card.Text>
                  <Button variant="primary">
                    <a
                      href="http://moderyn.com/wp-content/uploads/2019/08/Google_Home_Software_Integration.pdf"
                      target="_blank"
                    >
                      View Project
                    </a>
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Footer */}
      <div className="footer">
        <Container>
          <Row>
            <p>Jared Reed Portfolio - 2019</p>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
