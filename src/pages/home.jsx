import React, { Component } from 'react';


class home extends Component {
      
    render () {
        return (
            <div class="home">
                <p class="text-center display-4">Aulia Rachmat Yusdion</p>
                <p class="text-center">Design task isn't Responsive.</p>
                <div class="form-group d-flex justify-content-center mt-3">
                    <ul class="list-group col-md-10">
                        <li class="list-group-item list-group-item-primary">Question: What’s the latest front-end technology that you learn or apply?</li>
                        <li class="list-group-item list-group-item-success">Answer: React.js</li>
                        <li class="list-group-item list-group-item-primary">Question: What do you know about Progressive Web App (PWA)?</li>
                        <li class="list-group-item list-group-item-success">Answer: Application that based on javascript was made by Google within offline first concept</li>
                        <li class="list-group-item list-group-item-primary">Question: What do you think about responsive design web? Please show some sample codes that represent the website responsive.</li>
                        <li class="list-group-item list-group-item-success">Answer: Responsive web is important. Make UI compatible to open on mobile. sample code is @media (max-width:320px)</li>
                        <li class="list-group-item list-group-item-primary">Question: Create a simple Javascript algorithm to validate car license plate in Indonesia on a HTML form.</li>
                        <li class="list-group-item list-group-item-success">Answer: Check <a href="validation">Validation</a> on Navbar Above.</li>
                        <li class="list-group-item list-group-item-primary">Question: Please mention list of web references that you use for problem solving.</li>
                        <li class="list-group-item list-group-item-success">Answer: <a href="https://stackoverflow.com">stackoverflow.com</a> & <a href="https://github.community">Github Comunity.</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default home