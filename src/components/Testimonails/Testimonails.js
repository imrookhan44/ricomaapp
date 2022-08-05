import React, { Fragment } from "react";
import "./../../styles/Testimonails.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Testimonails(props) {
  return (
    <Fragment>
      <div id="maincontainer">
        <h1>Pellentesque Tortor Aliquet Arcu Nunc.</h1>
      </div>
      <div className="container">
        <div className="row" id="Testimonailsrow">
          <div className="col-6 ">
            <div className="card card-3">
              <span>Lorem ipsum dolor sit amet, consectetur</span>
              <div className="image">
                <img src={props.image} alt="" />
                <div className="review">
                  <div className="integer"> EM-1010</div>
                  <div className="needles">10 needles</div>
                </div>
                <div className="cards">
                  <div class="card1 card-1">
                    <div className="facebookIcon">
                      <i class="fa-brands fa-facebook"></i>
                    </div>
                    <div className="person">
                      <img src={props.person} alt="" />
                    </div>
                    <div className="reviewsText">
                      <div class="Reviewsname"> Viverra.</div>
                      <div class="Reviewsdesc" id="desc">
                        Sem scelerisque sit viverra.
                      </div>
                      <div className="stars">
                        <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                        <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                        <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                        <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="qouteImage">
                      <img src={props.qoute} alt="image" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="cards">
                      <div class="card1 card-1">
                        <div className="facebookIcon">
                          <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div className="person">
                          <img src={props.person} alt="" />
                        </div>
                        <div className="reviewsText">
                          <div class="Reviewsname">Viverra.</div>
                          <div class="Reviewsdesc" id="desc">
                            Sem scelerisque sit viverra.
                          </div>
                          <div className="stars">
                            <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                            <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                            <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                            <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                            <i class="fa-solid fa-star"></i>
                          </div>
                        </div>
                        <div className="qouteImage">
                          <img src={props.qoute} alt="image" />
                        </div>
                      </div>
                      <div className="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis consectetur cumque officia optio explicabo error.
                      </div>
                      <button type="button" id="button">
                        Dolor.
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card card-3">
              <span>Lorem ipsum dolor sit amet, consectetur</span>
              <div className="image">
                <Carousel autoplay>
                  <img src={props.image} alt="" />
                  <img src={props.image} alt="" />
                  <img src={props.image} alt="" />
                  <img src={props.image} alt="" />
                  <img src={props.image} alt="" />
                  <img src={props.image} alt="" />
                </Carousel>
                <div className="review">
                  <div className="integer"> EM-1010</div>
                  <div className="needles">10 needles</div>
                </div>
                <div className="cards">
                  <div class="card1 card-1">
                    <div className="facebookIcon">
                      <i class="fa-brands fa-facebook"></i>
                    </div>
                    <div className="person">
                      <img src={props.person} alt="" />
                    </div>
                    <div className="reviewsText">
                      <div class="Reviewsname">Viverra.</div>
                      <div class="Reviewsdesc" id="desc">
                        Sem scelerisque sit viverra.
                      </div>
                      <div className="stars">
                        <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                        <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                        <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                        <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                    <div className="qouteImage">
                      <img src={props.qoute} alt="image" />
                    </div>
                  </div>
                  <div className="secondcard mt-4">
                    <div className="cards">
                      <div className="card1 card-1">
                        <div className="facebookIcon">
                          <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div className="person">
                          <img src={props.person} alt="" />
                        </div>
                        <div className="reviewsText">
                          <div class="Reviewsname">Viverra.</div>
                          <div class="Reviewsdesc" id="desc">
                            Sem scelerisque sit viverra.
                          </div>
                          <div className="stars">
                            <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                            <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                            <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                            <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                            <i class="fa-solid fa-star"></i>
                          </div>
                        </div>
                        <div className="qouteImage">
                          <img src={props.qoute} alt="image" />
                        </div>
                      </div>
                      <div className="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Enim rerum in distinctio, dignissimos mollitia
                        debitis!
                      </div>
                      <button type="button" id="button">
                        Cursus.
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Testimonails;
