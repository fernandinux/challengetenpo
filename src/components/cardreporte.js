/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import arrownext from "../img/arrownext.svg";
import coin from "../img/coin.svg";
import { Link } from "react-router-dom";

function Cardreporte(props) {
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
  const coinstyle = css`
    width: 15px;
    height: 15px;
    padding: 0px;
    margin: 0px 1px;
  `;
  const coins = [];

  for (let i = 0; i < props.coins; i++) {
    coins.push(<img src={coin} css={coinstyle} alt="coin" />);
  }
  return (
    <Link
      to="/detailaccount"
      css={css`
        text-decoration: none;
      `}
    >
      <div css={card}>
        <img css={icon} src={props.icon} alt="movistar" />
        <div
          css={css`
            margin: 0px 5px;
            width: 120px;
          `}
        >
          <p>{props.description}</p>
          <h3>{props.identifier}</h3>
        </div>
        <div
          css={css`
            margin: 0px 5px;
            width: 180px;
            display: flex;
          `}
        >
          {coins.map((coin, index) => {
            return <div key={index}>{coin}</div>;
          })}
        </div>

        <img
          css={css`
            margin-right: 0px;
          `}
          src={arrownext}
          alt="arrownext"
        />
      </div>
    </Link>
  );
}
export default Cardreporte;
