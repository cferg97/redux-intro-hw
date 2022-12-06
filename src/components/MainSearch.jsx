import { useState } from "react";
import { Container, Row, Col, Form, Alert, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Job from "./Job";
import { useSelector, useDispatch } from "react-redux";
import { getJobsAction } from "../redux/actions";
import { useEffect } from "react";

const MainSearch = () => {
  const noOfFaves = useSelector(
    (store) => store.favourites.favourites.list.length
  );
  const [query, setQuery] = useState("");
  // const [jobs, setJobs] = useState([])
  const dispatch = useDispatch();
  let jobs = useSelector((state) => state.jobs.jobs);
  let jobsLoading = useSelector((state) => state.jobs.loading);
  let jobsError = useSelector((state) => state.jobs.error);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  const limit = "&limit=20";

  const endPoint = baseEndpoint + query + limit;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(getJobsAction(endPoint));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1>Remote Jobs Search</h1>
          <Link to="/favourites">
            <h2>View favourites ({noOfFaves})</h2>{" "}
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5 ">
          {jobsLoading && (
            <div className="d-flex flex-row justify-content-center">
              <Spinner
                className="mt-2 mb-2"
                animation="border"
                variant="info"
              />
            </div>
          )}
          {jobsError && <Alert variant="danger">Error fetching data! 😣</Alert>}

          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
