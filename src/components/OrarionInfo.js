import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Typography } from "@material-ui/core";
import WeekendIcon from "@material-ui/icons/Weekend";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import WatchLaterIcon from "@material-ui/icons/WatchLater";

export default function OrarionInfo(props) {
  if (props.type === "bottom") {
    return (
      <>
        <MDBRow>
          <MDBCol md="4" className="p-3">
            <Typography variant="h2" className="pb-4">
              23+
            </Typography>
            <Typography variant="h3">Partnerships</Typography>
          </MDBCol>
          <MDBCol md="4" className="p-3">
            <Typography variant="h2" className="pb-4">
              3400+
            </Typography>
            <Typography variant="h3"> Orders completed</Typography>
          </MDBCol>
          <MDBCol md="4" className="p-3">
            <Typography variant="h2" className="pb-4">
              5000+
            </Typography>
            <Typography variant="h3">Products Offered</Typography>
          </MDBCol>
        </MDBRow>
      </>
    );
  } else {
    return (
      <>
        <MDBRow>
          <MDBCol md="4" className="p-3">
            <Typography variant="h4">
              <WeekendIcon className="mx-2" />
              Modern furniture at nice prices.
            </Typography>
          </MDBCol>
          <MDBCol md="4" className="p-3">
            <Typography variant="h4">
              <LocalShippingIcon className="mx-2" />
              Fast, free delivery on orders over $999+.
            </Typography>
          </MDBCol>
          <MDBCol md="4" className="p-3">
            <Typography variant="h4">
              <WatchLaterIcon className="mx-2" />
              Designed to last for years.
            </Typography>
          </MDBCol>
        </MDBRow>
      </>
    );
  }
}
