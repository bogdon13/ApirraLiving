import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import Image from "next/image";
import Link from "next/link";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import theme from "../scripts/theme";

const useStyles = makeStyles({
  itemHover: {
    borderRadius: "30px",
    textAlign: "center",
    "&:hover": {
      backgroundColor: `${theme.palette.primary.hover}`,
    },
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <MDBFooter
      style={{ backgroundColor: "#131726", position: "relative" }}
      className="font-small pt-4 mt-4"
    >
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="text-center text-md-left mt-3 pb-3">
          <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
            {/* <h6 className="text-uppercase mb-4 font-weight-bold">
              Company name
            </h6> */}
            <Link href="/">
              <IconButton
                className={classes.itemHover}
                edge="start"
                color="inherit"
                aria-label="home"
                styles={{ marginBottom: "10px" }}
              >
                <Image
                  src="/logo.png"
                  alt="apirra logo"
                  width={150}
                  height={150}
                />
              </IconButton>
            </Link>
            <ul className="list-unstyled list-inline">
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a className="btn-floating btn-sm rgba-white-slight mx-1">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold text-center">
              Products
            </h6>
            <p className={classes.itemHover}>
              <Link href="/building-supplies">Building Supplies</Link>
            </p>
            <p className={classes.itemHover}>
              <Link href="/furniture">Furniture</Link>
            </p>
            <p className={classes.itemHover}>
              <Link href="/Flooring">Flooring</Link>
            </p>
            <p className={classes.itemHover}>
              <Link href="/lighting">Lighting</Link>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="3" lg="2" xl="2" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold text-center">
              Services
            </h6>
            <p className={classes.itemHover}>
              <Link href="/apirra-homes">Apirra Homes</Link>
            </p>
            <p className={classes.itemHover}>
              <Link href="/rendering">3D Rendering</Link>
            </p>
            <p className={classes.itemHover}>
              <Link href="/local-contracting">Local Contracting</Link>
            </p>
          </MDBCol>
          <hr className="w-100 clearfix d-md-none" />
          <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p>
              <i className="fa fa-envelope mr-3" /> info@gmail.com
            </p>
            <p>
              <i className="fa fa-phone mr-3" /> + 01 234 567 88
            </p>
          </MDBCol>
        </MDBRow>
        <hr />
        <MDBRow className="d-flex align-items-center">
          {/* <MDBCol md="8" lg="8">
            <p className="text-center text-md-left grey-text">
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </p>
          </MDBCol>
          <MDBCol md="4" lg="4" className="ml-lg-0">
            <div className="text-center text-md-right"></div>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
};

export default Footer;
