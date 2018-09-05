import React, { Component } from 'react';


class design extends Component {
      
    render () {
        return (
            <div class="design">
                <a class="navbar-brand ml-4" href=""><img class="logo" src="https://s3-eu-west-1.amazonaws.com/efr-images-prod/retailer/cropped/logo-hellofresh.png?c=1507652711" alt="logo"/></a>
                <ul class="nav justify-content-end m-t-3 bg-white">
                    <li class="nav-item">
                        <div class="row nav-inner-cus border-left">
                            <div>
                                <img class="mt-3" src="http://www.clker.com/cliparts/O/L/w/R/n/a/search-icon-marine-hi.png" width="30" alt="search"/>
                            </div>
                            <div class="ml-3">
                                <label class="tebal-hijau">Discover</label>
                                <p>Lorem Ipsum Dolor Eich Miscka Sofa Jakiws</p>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="row nav-inner-cus border-left">
                            <div>
                                <img class="mt-3" src="https://cdn2.iconfinder.com/data/icons/peppyicons/512/play2-512.png" width="30" alt="search"/>
                            </div>
                            <div class="ml-3">
                                <label class="tebal-hijau">Watch</label>
                                <p>Lorem Ipsum Dolor Eich Miscka Sofa Jakiws</p>
                            </div>
                        </div>
                    </li>
                    <li class="nav-item">
                        <div class="row nav-inner-cus border-left">
                            <div>
                                <img class="mt-3" src="https://cdn1.iconfinder.com/data/icons/social-messaging-ui-color-round-2/254000/80-512.png" width="30" alt="search"/>
                            </div>
                            <div class="ml-3">
                                <label class="tebal-hijau">Detox</label>
                                <p>Lorem Ipsum Dolor Eich Miscka Sofa Jakiws</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <div class="body-design">
                    
                </div>
                <div class="d-flex justify-content-center">
                    <div class="card m-t-s">
                        <div class="card-body text-center">
                            <h1 class="just-hijau">The Decision Detox</h1>
                            <h1 class="just-grey">Starts Tonight With Your</h1>
                            <h1 class="just-grey">Personalised Meal plan.</h1>
                        </div>
                        <div class="card-header">
                            <form>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">How many people are cooking for?</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Choose..</option>                                    
                                    <option>1 People</option>
                                    <option>2 People</option>
                                    <option>3 People</option>
                                    <option>4 People</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">What is your cooking style?</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Choose..</option>
                                    <option>Low Calorie</option>
                                    <option>Fat Calorie</option>
                                    <option>Salad</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">Choose your favorite cuisine?</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Choose..</option>
                                    <option>Asia</option>
                                </select>
                            </div>    
                            <a href="" class="btn btn-success center">Generated Plan</a>
                            </form>
                        </div>
                    </div>                
                </div>
            </div>
        );
    }
}

export default design