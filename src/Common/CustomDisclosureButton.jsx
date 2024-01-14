import React from "react";
import { Link } from "react-scroll";

const CustomDisclosureButton = ({ id, children, ...rest }) => {
    return (
      <Link to={id} {...rest} smooth duration={300}>
        {children}
      </Link>
    );
};

export default CustomDisclosureButton;