import React from "react";

class Searchbar extends React.Component {
  state = { term: "" };

  onInputChage = (e) => {
    this.setState({ term: e.target.value });
  };

  onInputSubmit = (e) => {
    e.preventDefault();

    this.props.getSearch(this.state.term);
  };

  render() {
    return (
      <form className="form" onSubmit={this.onInputSubmit}>
        <input
          type="text"
          value={this.state.term}
          name=""
          id=""
          onChange={this.onInputChage}
        />
      </form>
    );
  }
}

export default Searchbar;
