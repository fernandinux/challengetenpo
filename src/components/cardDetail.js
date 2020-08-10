/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import arrowgreen from "../img/arrowgreen.svg";
import arrownext from "../img/arrownext.svg";
import coin from "../img/coin.svg";
import { Link } from "react-router-dom";

function CardDetail(props) {
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

    padding: 13px;
    justify-content: space-around;

    align-items: center;
    margin-bottom: 8px;
    h3 {
      font-size: 14px;
      color: #595959;
      margin: 0px;
    }
  `;

  return (
    <div css={card}>
      <h3>{props.operation}</h3>
      <h3>{props.fecha}</h3>
      <h3>{props.monto}</h3>
    </div>
  );
}
export default CardDetail;
