import React, { Fragment, useState } from "react";
import facebook from "./../../images/Facebook White Icon.png";
import twitter from "./../../images/Twitter White Icon.png";
import "./../../styles/Footer.css";
import { Modal } from "react-bootstrap";
import Accordian from "../../Common/Accordian";
// import Modal from 'react-bootstrap/Modal';
function Footer(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props.Logo);
  return (
    <Fragment>
      <div className="container-fluid " id="mainFooter">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="footerImage">
                <img src={props.Logo} alt="noimage" srcset="" />
              </div>
              <div className="social-icons">
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
                <i class="fa-brands fa-pinterest-p"></i>
              </div>
            </div>
            <div className="col-2">
              <div className>
                <div className="footer-title">Massa.</div>
                <ul className>
                  <li>Aliquet et.</li>
                  <li>Donec.</li>
                  <li>Neque nec feugiat.</li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className>
                <div className="footer-title">Massa.</div>
                <ul className>
                  <li>Aliquet et.</li>
                  <li>Donec.</li>
                  <li>Neque nec feugiat.</li>
                </ul>
              </div>
            </div>
            <div className="col-2">
              <div className>
                <div className="footer-title">Massa.</div>
                <ul className>
                  <li>Aliquet et.</li>
                  <li>Donec.</li>
                  <li>Neque nec feugiat.</li>
                </ul>
              </div>
            </div>
            <div className="col-3">
              <div className="video">
                <div className="playicon" onClick={handleShow}>
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
          </div>
          <div className="row  mt-5 Footer-bottom">
            <div className="col-4" id="firstcol">
              <div>Neque dictum.</div>
              <div>Pulvinar.</div>
            </div>
            <div className="col-8" id="righttext">
              Elementum lectus suspendisse ipsum.
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

export default Footer;
