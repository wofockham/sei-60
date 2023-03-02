import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import _ from 'underscore';

const Home = () => {
    const navigate = useNavigate();

    const _gotoRandomUser = () => {
        const students = ["GigaXXIV", "bakewa", "Haoran-ryan", "HueNguyenSE", "Jeffrey-Fazal", "johnonline35", "waddo4", "nicolexylow", "PenelopeChen", "TanakornTree", "vncechoi", "Wckenny14", "loudringphone", "jpcodingjourney"];
        const randomStudent = _(students).sample();
        navigate(`/profile/${ randomStudent }`);
    };
    
    return (
        <div>
            <h1>Gitub Search</h1>
            <Link to="/search">
                <button>Search for a user</button>
            </Link>

            <button onClick={ _gotoRandomUser }>Random user</button>
        </div>
    );
}

export default Home;
