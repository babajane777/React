import "./styles.css";
import List from "./List";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import { Container } from "./reusable.styled";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bagItems: []
    };
  }

  updateBagItems = (bagItems) => {
    this.setState({ bagItems });
  };
  render() {
    const { bagItems } = this.state;

    return (
      <div className="App">
        <Navbar bagItemsCount={bagItems.length} />
        <h3>CodeTube Catalog</h3>
        <Container display= "flex" className="container">
          <List updateBagItems={this.updateBagItems} />
          <Sidebar />
        </Container>
      </div>
    );
  }
}

export default App;

  



// export default function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <h3>CodeTube Catalog</h3>
//       <div className="container">
//         <List />
//         <Sidebar />
//       </div>
//     </div>
//   );
// }
