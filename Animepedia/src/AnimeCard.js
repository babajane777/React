import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  render() {
    const {img , name} = this.props
    return <div className="anime-card">

      <img src={img}/>
      <p>{name}</p>
      
    </div>;
  }
}

export default AnimeCard;
