import React, { Component } from "react";
import Card from "../components/Card/Card";

class List extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch("../../assets/data.json")
      .then((data) => {
        return data.json();
      })
      .then((json) => {
        if (json) {
          this.setState({
            data: json,
            loading: false,
          });
        }
      });
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="row">
        {data.map((movie) => (
          <div key={movie.id} className="col-sm-2">
            <Card key={movie.id} movie={movie} />
          </div>
        ))}
      </div>
    );
  }
}

export default List;
