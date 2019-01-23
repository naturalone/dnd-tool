import React, { Component } from "react";
import "./App.css";
import CharacterPanel from "./components/CharacterPanel";
import Character from "./components/Character";
import { Panel, ListGroup, ListGroupItem } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='container' style={pageStyle}>
          <Panel style={{ gridColumn: "1", marginRight: "30px" }}>
            <Panel.Heading style={{ textAlign: "center" }}>
              Character Selector
            </Panel.Heading>
            <Panel.Body>
              <ListGroup>
                <ListGroupItem
                  onClick={() => {
                    console.log("wtf");
                  }}
                >
                  character 1
                </ListGroupItem>
                <ListGroupItem>character 2</ListGroupItem>
              </ListGroup>
            </Panel.Body>
          </Panel>
          <Panel style={{ gridColumn: "2" }}>
            <Panel.Heading style={{ textAlign: "center" }}>
              Character
            </Panel.Heading>
            <Panel.Body />
          </Panel>
        </div>
      </div>
    );
  }
}

const pageStyle = {
  display: "grid",
  gridTemplateColumns: "20% 78%",
  paddingTop: "10px"
};

export default App;
