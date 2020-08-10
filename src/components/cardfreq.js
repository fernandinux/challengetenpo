/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import arrowgreen from "../img/arrowgreen.svg";
import arrownext from "../img/arrownext.svg";
import { Link } from "react-router-dom";

function Cardfreq(props) {
  const icon = css`
    width: 37px;
    border-radius: 50%;
    height: 37px;
    padding: 0px;
  `;
  const card = css`
    background: white;
    display: flex;
    border-radius: 10px;
    height: 46px;
    padding: 13px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    h3 {
      font-size: 14px;
      color: #595959;
      margin: 0px;
    }
    p {
      margin: 0px;
      color: #00baa4;
      font-size: 12px;
    }
  `;
  return (
    <Link
      to="/recarga"
      css={css`
        text-decoration: none;
      `}
    >
      <div css={card}>
        <img css={icon} src={props.icon} alt="movistar" />
        <h3>{props.company}</h3>
        <img src={arrowgreen} alt="arrowgreen" />
        <div>
          <p>{props.description}</p>
          <h3>{props.identifier}</h3>
        </div>
        <img src={arrownext} alt="arrownext" />
      </div>
    </Link>
  );
}
export default Cardfreq;
