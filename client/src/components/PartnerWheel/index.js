import React, { Component } from 'react';
import "./style.css";

class index extends Component {
    render() {
        return (
            <div>

<div id="demo" class="carousel slide" data-ride="carousel">

  
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  
 
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://www.coca-colaindia.com/content/dam/journey/in/en/private/stories/history/the_logo_story_01122014_596x334.rendition.320.179.jpg" alt="github-logo" width="1100" height="500"/>
    </div>
    <div class="carousel-item">
      <img src="client\src\components\PartnerWheel\logos\glassdoor-logo.png" alt="Chicago" width="1100" height="500"/>
    </div>
    <div class="carousel-item">
      <img src="ny.jpg" alt="New York" width="1100" height="500"/>
    </div>
  </div>
  
  
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>
            </div>
        );
    }
}

export default index;