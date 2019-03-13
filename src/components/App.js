import React from "react";
import AuthorList from "./AuthorList";
import AddAuthorForm from "./AddAuthorForm";

const App = () => {
  return (
    <div className="ui container grid" style={{ marginTop: "5rem" }}>
      <div className="ui row">
        <div className="column eight wide" style={{ paddingRight: "5rem" }}>
          <h1 style={{ marginBottom: "4rem" }}>FAVORITE AUTHORS</h1>
          <AuthorList />
        </div>
        <div className="column eight wide" style={{ marginTop: "7rem" }}>
          <AddAuthorForm />
        </div>
      </div>
    </div>
  );
};

export default App;
