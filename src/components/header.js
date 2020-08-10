/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import arrowback from "../img/Arrowleft.svg";
import { Link } from "react-router-dom";

function Header(props) {
  const header = css`
    height: 34px;
    margin: 0;
    padding: 15px 24px;
    background: white;
    display: flex;
  `;
  const headertxt = css`
    margin-left: 10px;
    h3 {
      font-size: 12px;
      margin: 0px;
      font-style: normal;
      color: #595959;
      font-weight: lighter;
    }
    b {
      font-weight: bold;
    }
  `;

  return (
    <div css={header}>
      <Link
        to={props.redirect}
        css={css`
          display: flex;
        `}
      >
        <img src={arrowback} alt="arrowback" />
      </Link>

      <div css={headertxt}>
        <h3>TU PLATA DISPONIBLE</h3>
        <h3>
          <b>$ 5.000</b>
        </h3>
      </div>
    </div>
  );
}
export default Header;
