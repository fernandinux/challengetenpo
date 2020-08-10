/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import arrowgreen from "../img/arrowgreen.svg";
import arrownext from "../img/arrownext.svg";
import movistar from "../img/movistar.png";
import entel from "../img/entel.png";
import claro from "../img/claro.png";
import wom from "../img/wom.png";
import AliceCarousel from "react-alice-carousel";
import vtr from "../img/vtr.png";
import virgin from "../img/virgin.png";
import simple from "../img/simple.png";
import { Link } from "react-router-dom";

function CardOperadores(props) {
  const icon = css`
    width: 26px;
    height: 26px;
    padding: 0px;
    border-radius: 100%;
  `;
  const card = css`
    background: white;
    display: flex;
    border-radius: 10px;
    width: 120px;
    padding: 13px;
    justify-content: space-around;
    margin-right: 10px;
    align-items: center;
    margin-bottom: 8px;
    h3 {
      font-size: 11px;
      color: #595959;
      margin: 0px;
      font-weight: normal;
    }
  `;
  return (
    <Link
      to="/regrecarga"
      css={css`
        text-decoration: none;
      `}
    >
      <div css={card}>
        <img css={icon} src={props.oper} alt={props.label} />
        <h3>{props.label}</h3>
      </div>
    </Link>
  );
}
export default CardOperadores;
