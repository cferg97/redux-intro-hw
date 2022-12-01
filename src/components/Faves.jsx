import { Col, Row, Button, Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Faves = () => {
  const favourites = useSelector((state) => state.favourites.list);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Container className="flex-column justify-items-center align-items-center text-center">
      <Row>
        <Col sm={12}>
          <ul style={{ listStyle: "none" }}>
          <h1 className="mt-2 tet-center">Favourite Companies</h1>
            {favourites.map((job, i) => (
              <li key={i} className="my-4">
                <Link to={`/${job.company_name}`}>{job.company_name}</Link>
                <p>{job.title}</p>
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
            <Button variant="info" onClick={() => navigate(-1)}>
            Back to job search
          </Button>
          </ul>
          
        </Col>
      </Row>
    </Container>
  );
};

export default Faves;
