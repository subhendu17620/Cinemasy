import React from "react";
import { Link } from "react-router-dom";

import MOVIE_DATA from "../../assets/movie.data";
import "./homepage.styles.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: MOVIE_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="home-page">
        <div className="home-page-now-showing">
          <h1>
            Now Showing &nbsp;
            <img
              src="https://image.flaticon.com/icons/svg/1160/1160766.svg"
              alt=""
            />
          </h1>

          <CollectionPreview
            collectionType="now-showing-indirect"
            collections={collections}
          />
          <Link to="/nowshowing" className="load-more-items">
            <div>Load More Items</div>
          </Link>
        </div>
        <div className="home-page-upcoming">
          <h1>
            Upcoming &nbsp;
            <img
              src="https://image.flaticon.com/icons/svg/1160/1160766.svg"
              alt=""
            />
          </h1>
          <CollectionPreview
            collectionType="upcoming-indirect"
            collections={collections}
          />
          <Link to="/upcoming" className="load-more-items">
            <div>Load More Items</div>
          </Link>
        </div>
        <div className="home-page-popular">
          <h1>
            Popular &nbsp;
            <img
              src="https://image.flaticon.com/icons/svg/1160/1160766.svg"
              alt=""
            />
          </h1>
          <CollectionPreview
            collectionType="popular-indirect"
            collections={collections}
          />
          <Link to="/popular" className="load-more-items">
            <div>Load More Items</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
