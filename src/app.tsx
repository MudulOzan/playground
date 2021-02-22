import React from "react";
import { Button, Modal } from "react-bootstrap";
import MyModal from "./myModal";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component<
  {},
  { show: boolean; events: object }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
      events: [
        {
          Title: "Foo",
          User: {
            Id: [1]
          }
        },
        {
          Title: "Bar",
          User: {
            Id: [2, 3]
          }
        },
        {
          Title: "Baz",
          User: {
            Id: []
          }
        }
      ]
    };
  }

  handleClose = () => {
    this.setState((prevState) => ({ ...prevState, show: false }));
  };

  handleShow = () => {
    this.setState((prevState) => ({ ...prevState, show: true }));
  };
  render() {
    console.log("test");
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MyModal />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
