import {pageLinks,socialLinks} from "../data";
export const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {pageLinks.map(({id,href,text})=>{
                    return <li key={id}>
                        <a href={href} className="footer-link">{text}</a>
                    </li>
                })}
            </ul>
            <ul className="footer-icons">
                {socialLinks.map(({id, href, icon})=>{
                    return <li key={id}>
                        <a href={href} target="_blank" className="footer-icon" rel="noreferrer">
                            <i className={icon}></i>
                        </a>
                    </li>
                })}
            </ul>
            <p className="copyright">
                copyleft &copy; Backroads travel tours company.<br/>
                <span id="date">{new Date().getFullYear()}</span> all rights reversed
            </p>
        </footer>
    );
};