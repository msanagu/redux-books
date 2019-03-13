import React from "react";
import { connect } from "react-redux";
import { addAuthor } from "../actions";

class AddAuthorForm extends React.Component {
  state = {
    form: {
      id: null,
      name: "",
      city: "",
      book: ""
    }
  };

  onInputChange = event => {
    const { form } = this.state;
    const newId = this.props.authorsList[0].length + 1;
    form[event.target.name] = event.target.value;
    form["id"] = newId.toString();
    this.setState({
      form
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log("submitted");
    this.props.addAuthor(this.state.form);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Add A New Author:</h2>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Author Name"
              onChange={this.onInputChange}
            />
          </div>
          <div className="field">
            <label>Book Title:</label>
            <input
              type="text"
              name="book"
              placeholder="Book Title"
              onChange={this.onInputChange}
            />
          </div>
          <div className="field">
            <label>City:</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={this.onInputChange}
            />
          </div>
          <button className="ui button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { authorsList: state.authors };
};

export default connect(
  mapStateToProps,
  { addAuthor }
)(AddAuthorForm);
