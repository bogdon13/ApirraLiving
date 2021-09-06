import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Image from "next/image";
import { Parallax } from "react-parallax";

const useStyles = makeStyles({
  container: {
    height: "45vh",
    backgroundColor: "#ECE3C4",
    textAlign: "right",
  },
  containerBottom: {
    height: "45vh",
    backgroundColor: "#ECE3C4",
    textAlign: "left",
  },
  description: {
    marginTop: "15%",
    marginLeft: "15%",
    textAlign: "right",
  },
  descriptionBottom: {
    marginTop: "15%",
    marginRight: "15%",
    textAlign: "left",
  },
});

export default function OrarionDetails() {
  const classes = useStyles({});
  return (
    <div>
      <MDBRow className={classes.container}>
        <MDBCol md="7" className="col-example">
          <div className="m-2">
            <Typography style={{ fontFamily: "Arial Black" }} variant="h2">
              Building Supplies
            </Typography>
            <Typography
              className={classes.description}
              style={{ fontFamily: "Arial Black" }}
              variant="h5"
            >
              Any material, any design. We can delivery our building materials
              anywhere in the country.
            </Typography>
          </div>
        </MDBCol>
        <MDBCol md="5" className="col-example">
          <div className="m-3">
            <Image src="/orarion1.jpg" layout="fill" objectFit="cover" />
          </div>
        </MDBCol>
      </MDBRow>
      <MDBRow className={classes.containerBottom}>
        <MDBCol md="5" className="col-example">
          <div className="m-3">
            <Image src="/carousel1.jpeg" layout="fill" objectFit="cover" />
          </div>
        </MDBCol>
        <MDBCol md="7" className="col-example">
          <div className="m-2">
            <Typography style={{ fontFamily: "Arial Black" }} variant="h2">
              Furniture
            </Typography>
            <Typography
              className={classes.descriptionBottom}
              style={{ fontFamily: "Arial Black" }}
              variant="h5"
            >
              Any material, any design. We can delivery our furniture anywhere
              in the country.
            </Typography>
          </div>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
