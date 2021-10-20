import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import Image from "next/image";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  container: {
    height: "50vh",
    textAlign: "right",
    overflowX: "hidden",
  },
});

export default function OrarionContact() {
  const classes = useStyles();
  return (
    <MDBRow>
      <MDBCol md="8" className="col-example">
        <div className="pb-3">
          <Typography> </Typography>
        </div>
        <MDBRow>
          <MDBCol md="6" className="col-example"></MDBCol>
          <MDBCol md="6" className="col-example"></MDBCol>
        </MDBRow>
      </MDBCol>
      <MDBCol md="4" className={classes.container}>
        <div className="pb-3">
          <Image src="/orarioncontact.png" layout="fill" objectFit="contain" />
        </div>
      </MDBCol>
    </MDBRow>
  );
}
