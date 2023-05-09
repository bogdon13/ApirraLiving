import { Zoom, useScrollTrigger } from "@material-ui/core";

const ToSupplies = ({ children }) => {
  const trigger = useScrollTrigger();
  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#supplies-album"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };
  return (
    <div onClick={handleClick} role="presentation">
      {children}
    </div>
  );
};
export default ToSupplies;
