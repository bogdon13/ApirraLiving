import { Zoom, useScrollTrigger } from "@material-ui/core";
const style = {
  position: `fixed`,
  bottom: `50px`,
  right: `1rem`,
  zIndex: `99`,
};
const BackToTop = ({ children }) => {
  const trigger = useScrollTrigger();
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" style={style}>
        {children}
      </div>
    </Zoom>
  );
};
export default BackToTop;
