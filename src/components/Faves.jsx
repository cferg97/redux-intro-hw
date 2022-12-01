import { Col, Row, Button, Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

const Faves = () => {
  const favourites = useSelector((state) => state.favourites.list);
  const dispatch = useDispatch();
  return (
    <Container className="flex-column align-items-center text-center">
      <Row>
        <Col sm={12}>
          <ul style={{ listStyle: "none" }}>
            {favourites.map((job, i) => (
              <li key={i} className="my-4">
                {job}
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch({
                      type: "REMOVE_FROM_FAVES",
                      payload: i,
                    });
                  }}
                >
                  <FaTrash />
                </Button>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Faves;
