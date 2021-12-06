import * as React from "react";
import '../styles/header.sass';
import { Link } from 'gatsby';

const Header = () => {
    return (
        <header>
            <Link to="../">
            <div class="head box">
                <img class="ballon" src="https://static.wixstatic.com/media/41d000_609d3d052aa2455f99274f3bb75a157e.png/v1/fill/w_92,h_148,al_c,q_85,usm_0.66_1.00_0.01/41d000_609d3d052aa2455f99274f3bb75a157e.webp" alt="balloon"></img>
                <span>devlog</span>
            </div>
            </Link>
            <div class="head content">
                <a href="https://github.com/min050410/TIL"><span>블로그</span></a>
                <span>다크모드</span>
                <a href="https://github.com/min050410"><span>소개</span></a>
            </div>
        </header>
    )
}
export default Header;