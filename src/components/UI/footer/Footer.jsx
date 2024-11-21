import React from "react";
import classes from "./Footer.module.css";

const Footer = function () {
  
	return(
		<footer className={classes.footer}>
			<div className="footer__container">
        		<p className="footer__copyright">© 2024 Pet-Project</p>
				<p className="footer__discription">Пет-проект (pet — англ. «домашний питомец, любимец») — это проект, который разработчик делает для себя, в свободное от основной работы время. Это отличный способ попробовать новые технологии, развить свои навыки и просто убить время.</p>
      		</div>
		</footer>
	)
}
export default Footer;
