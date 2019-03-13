import React from "react";
import { connect } from "react-redux";
import { fetchAuthors } from "../actions";

class AuthorList extends React.Component {
  componentDidMount = () => {
    this.props.fetchAuthors();
  };

  renderList = () =>
    this.props.authorsList.map(authorsList =>
      authorsList.map(author => {
        return (
          <div className="item" key={author.id}>
            <h2>{author.name}</h2>
            <h4>{author.book}</h4>
            <p>City of residence: {author.city}</p>
          </div>
        );
      })
    );
  // this.props.authorsList[0].map(author => {
  //   return (
  //     <div className="item" key={author.id}>
  //       <h2>{author.name}</h2>
  //       <h4>{author.book}</h4>
  //       <p>City of residence: {author.city}</p>
  //     </div>
  //   );
  // });

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { authorsList: state.authors };
};

export default connect(
  mapStateToProps,
  { fetchAuthors }
)(AuthorList);
