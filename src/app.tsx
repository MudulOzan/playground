import React from "react";
import { Button, Modal } from "react-bootstrap";

export default class App extends React.Component {
  constructor(props: any) {
    super(props);
  }
  show = () => {};

  handleClose = () => {};

  handleShow = () => {};
  render() {
    console.log("test");
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>

        <Modal show={this.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
