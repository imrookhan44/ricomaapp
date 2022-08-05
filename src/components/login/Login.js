import React, { useState } from "react";
import "./../../styles/Login.css";
import { Modal } from "react-bootstrap";
function Login(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.Logo);
  return (
    <div id="mainPic">
      <div className="container">
        <div className="row">
          <div className="col-md-6 Header">
            <h1>Dui Augue Lectus In Ut At Lorem</h1>
            <p className="Header">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem nec
              aenean leo pulvinar morbi pulvinar sagittis, hac massa. Vulputate
              bibendum et in mattis nec duis nec, magna. Nunc, mattis purus
              dolor risus commodo. Tempus molestie morbi ultrices nunc.
              <spans className="myspan">
                Semper nam ridiculus duis bibendum risus, arcu arcu.
              </spans>{" "}
              <br />
              <br />
              Nulla ut elementum, nibh viverra pharetra eu. Aliquet sem
              condimentum posuere cursus quis risus. Mauris, auctor ridiculus
              blandit lacus.{" "}
              <spans className="myspan">
                Porttitor diam a amet pharetra tellus, senectus augue. Id sed a
                quis morbi ac odio cursus metus sit. Sapien ut non eu non
                egestas non mauris.
              </spans>{" "}
              Elit, scelerisque mauris aenean justo.
            </p>

            <div className="col-lg-8   videodiv">
              {/*
                                <Button variant="primary" onClick={handleShow}>

                                </Button> */}
              <div className="playicons" onClick={handleShow}>
                <img src={props.playIcon} />
              </div>

              <Modal
                className="mt-5"
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <div className="closeIcon" onClick={handleClose}>
                  <i className="fa-solid fa-xmark"></i>
                </div>

                <video height="" controls>
                  <source src="Video Link" />
                </video>
              </Modal>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 Header">
            <div className=" Header">
              <div className="Header-title">
                {/* <h2>Dui Augue Lectus In Ut At Lorem</h2> */}
              </div>
              <div className="Header-form">
                {/* <div className="Header-top">
                                    <div className=" Header-box-1 ">
                                        <img
                                            src={require('./../../images/Rectangle 279.png')}
                                            alt="box-1"
                                        />
                                    </div>
                                    <div className="Header-box-2 ">
                                        <img
                                            src={require('./../../images/Banner Image.png')}
                                            alt="box-2"
                                        />
                                    </div>
                                    <div className=" Header_box__V9KeB Header_box_3__t38cU ">
                                        <img
                                            src={require('./../../images/Rectangle Copy 6.png')}
                                            alt="box-3"
                                        />
                                    </div>
                                </div> */}
                <div className="Header_top__9hEyi">
                                    <div className=" Header_box__V9KeB Header_box_1__x1vCA ">
                                        <img
                                            src={require('./../../images/Rectangle 279.png')}
                                            alt="box-1"
                                        />
                                    </div>
                                    <div className=" Header_box__V9KeB Header_box_2__O7G0f ">
                                        <img
                                            src={require('./../../images/Rectangle Copy 6.png')}
                                            alt="box-2"
                                        />
                                    </div>
                                    <div className=" Header_box__V9KeB Header_box_3__t38cU ">
                                        <img
                                            src={require('./../../images/Banner Image.png')}
                                            alt="box-3"
                                        />
                                    </div>
                                </div>

                <form className="Header-box">
                  <div className="Header-inner">
                    <div className="Header-form-title">
                      <h2>Dictumst dui egestas.</h2>
                    </div>

                    <div className="Header-form-inputs">
                      <div className="row">
                        <div className="col-6">
                          <div className="Header-input">
                            <label>First Name</label>
                            <div className="input">
                              <input placeholder="First name*" type="text" />
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="Header-input">
                            <label>Last Name</label>
                            <div className="input">
                              <input placeholder="Last name*" type="text" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-6">
                          <div className="Header-input">
                            <label>Email Address</label>
                            <div className="input">
                              <input
                                placeholder="Email address*"
                                type="email"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="Header-input">
                            <label>Phone Number</label>
                            <div className="input">
                              <input
                                placeholder="Phone number*"
                                type="number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="Header-input">
                          <label>Country</label>
                          <div className="input">
                            <input placeholder="Counrty*" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="Header-button">
                      Et nibh lacus elit.
                    </button>
                    <div className="Header-security">
                      <img
                        src={require("./../../images/Group 5846.png")}
                        alt="security-img"
                      />
                    </div>

                    <div className="Header-stars">
                      <div className="name">
                        Sit eu.
                        <div className="Header-des">
                          <div className="paragraph">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugiat facilis, porro reprehenderit animi
                            minus commodi sint incidunt non! Saepe, omnis!
                          </div>
                          <div className="star-icons">
                            <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                            <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                            <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                            <i class="fa-solid fa-star"></i>&nbsp;&nbsp;
                            <i class="fa-solid fa-star"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="Header-subdes">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore impedit veniam velit dolorum suscipit dicta iure a
                      incidunt illo, aspernatur asperiores laudantium unde
                      accusamus adipisci accusantium, quod harum similique
                      iusto.
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="fulldiv">
          <div className="row">
            <div className="col-4" id="colfour">
              <div className="imagelogin">
                <div className="phoneImage">
                  <img
                    src={require("./../../images/Customer Support.png")}
                    alt=""
                    srcset=""
                  />
                </div>

                <div className="firstcol">
                  <div className="second">24/7</div>
                  <div className="third">lorem ipsum</div>
                </div>
              </div>
                      </div>
                      <div className="col-4" id="colfour">
              <div className="imagelogin">
                <div className="phoneImage">
                  <img
                    src={require("./../../images/Direct From Factory.png")}
                    alt=""
                    srcset=""
                  />
                </div>

                <div className="firstcol">
                  <div className="second">30+</div>
                  <div className="third">lorem ipsum</div>
                </div>
              </div>
                      </div>
                      <div className="col-4" >
              <div className="imagelogin">
                <div className="phoneImage">
                  <img
                    src={require("./../../images/Highest Quality.png")}
                    alt=""
                    srcset=""
                  />
                </div>

                <div className="firstcol">
                  <div className="second">50+</div>
                  <div className="third">lorem ipsum</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
