import React from "react";
import NavBar from "./NavBar";
import { connect } from "react-redux";

function mapStateToProps({savedForms}) {
  return {
    savedForms
  };
}

function mapDispatchToProps(dispatch) {
  return {

  };
}

class SavedForms extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default SavedForms;
