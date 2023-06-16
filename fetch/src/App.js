import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  // Use the required lifecycle methods here
  componentDidMount() {
    // console.log("ComponentA componentDidMount");
    // this.setState({ loading: true });
    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then(response => response.json())
      .then(data => {this.setState({photos : data, loading:false})});
  }

render() {
  const { photos, loading } = this.state;

  return (
    <div className="App">
      {loading ? (
        <p>Loading...</p>
      ) : (
        photos.map(photo => <Image key={photo.id} photo={photo} />)
      )}
    </div>
  );
}
}
