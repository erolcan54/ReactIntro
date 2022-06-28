import { Container, Row, Col } from 'reactstrap';
import { CategoryList } from './CategoryList';
import Navi from './Navi';
import { Products } from './Products';

function App() {

  let productInfo={title:"Produt List"}

  return (
    <div className="App">
      <Container>
        <Row>
          <Navi />
        </Row>
        <Row>
          <Col xs="3"><CategoryList title="Category List"/></Col>
          <Col xs="9"><Products info={productInfo}/></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
