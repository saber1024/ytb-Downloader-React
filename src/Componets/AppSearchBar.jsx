import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

import React, { Component } from "react";

export default class AppSearchBar extends Component {
  constructor() {
    super();

    this.state = {
      url: "",
    };

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.url);
  };

  render() {
    return (
      <div>
        <Form onSubmit={(e) => this.submitHandler(e)}>
          <Row>
            <Col md={5}>
              <Form.Control
                placeholder="Input url"
                aria-label="Input url"
                aria-describedby="basic-addon2"
                value={this.state.url}
                required
                onChange={(e) => this.setState({ url: e.target.value })}
              />
            </Col>
            <Col md={3}>
              <Button type="submit" variant="primary">
                提交
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
