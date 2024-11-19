import React from "react";
import classes from "./Footer.module.css";

const Footer = function () {
  
	return(
		<footer className={classes.footer}>
			<div className="footer__container">
        		<p className="footer__copyright">© 2024 Pet-Project</p>
      		</div>
		</footer>
	)
}
export default Footer;
