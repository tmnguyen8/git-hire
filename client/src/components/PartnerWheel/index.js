import React, { Component } from 'react';
import "./style.css";

class index extends Component {
    render() {
        return (
            <div className="carousel-container">

                {/* Change class to className breaks the carousel, not sure whyt */}
                
                <div class="carousel slide" data-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://raw.githubusercontent.com/tmnguyen8/git-hire/master/client/src/components/PartnerWheel/logos/github-logo.png" alt="github-logo" width="550" height="500"/>
                </div>

                <div class="carousel-item">
                    <img src="https://raw.githubusercontent.com/tmnguyen8/git-hire/master/client/src/components/PartnerWheel/logos/glassdoor-logo.png" alt="glassdoor-logo" width="550" height="500"/>
                </div>

                <div class="carousel-item">
                    <img src="https://raw.githubusercontent.com/tmnguyen8/git-hire/master/client/src/components/PartnerWheel/logos/indeed.png" alt="indeed-logo" width="550" height="500"/>
                </div>

                <div class="carousel-item">
                    <img src="https://raw.githubusercontent.com/tmnguyen8/git-hire/master/client/src/components/PartnerWheel/logos/monster-app-logo.png" alt="monster-jobs-logo" width="550" height="500"/>
                </div>

                <div class="carousel-item">
                    <img src="https://raw.githubusercontent.com/tmnguyen8/git-hire/master/client/src/components/PartnerWheel/logos/simply-logo.png" alt="simply-hire-logo" width="550" height="500"/>
                </div>

                <div class="carousel-item">
                    <img src="https://raw.githubusercontent.com/tmnguyen8/git-hire/master/client/src/components/PartnerWheel/logos/usa-jobs.png" alt="usa-jobs-logo" width="550" height="500"/>
                </div>
                </div>
            </div>
            </div>
        );
    }
}

export default index;