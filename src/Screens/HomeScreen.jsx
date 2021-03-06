import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVidInfo } from "../Actions/DownloadAction";
import AppSearchBar from "../Componets/AppSearchBar";
import Loader from "../Componets/Loader";
import Message from "../Componets/Message";
import { ListGroup, Row, Col, Button, Container } from "react-bootstrap";
const HomeScreen = () => {
  const vidInfo = useSelector((state) => state.getvidInfo);

  const { info, loading, error } = vidInfo;

  const dispatch = useDispatch();

  const submitHandler = (url) => {
    dispatch(getVidInfo(url));
  };

  const btnAction = async (url) => {
    window.open(url);
  };

  return (
    <div>
      <Container className="justify-content-center">
        <h3 style={{ textAlign: "center", paddingBottom: "px" }}>
          YouTube视频下载
        </h3>
        <AppSearchBar onSubmit={(url) => submitHandler(url)} />
        <div className="py-3">
          {error ? (
            <Message variant="danger">{error}</Message>
          ) : loading ? (
            <Loader />
          ) : (
            <ListGroup>
              {info.map((x) => {
                return (
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <p>清晰度</p>
                      </Col>
                      <Col>{x.qualityLabel}</Col>
                      <Col>
                        <Button
                          variant="primary"
                          onClick={() => {
                            btnAction(x.url);
                          }}
                        >
                          下载
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          )}
        </div>
      </Container>
    </div>
  );
};

export default HomeScreen;
