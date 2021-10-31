/* eslint-disable indent */
/* eslint-disable prettier/prettier */
import { Link } from "react-router-dom";
import { ROUTES } from "../../config/routes";

export const Header = () => {

    return <header>
        <img src="" alt="" />

        <div className="navigation">
            {ROUTES.map(el => (<Link key={el.name} to={el.route}>{el.name}</Link>))}
        </div>
    </header>;
};
