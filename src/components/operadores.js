/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import movistar from "../img/movistar.png";
import entel from "../img/entel.png";
import claro from "../img/claro.png";
import wom from "../img/wom.png";
import AliceCarousel from "react-alice-carousel";
import vtr from "../img/vtr.png";
import virgin from "../img/virgin.png";
import simple from "../img/simple.png";
import wom1 from "../img/wom1.png";
import simple1 from "../img/simple1.png";
import virgin1 from "../img/virgin1.png";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import Header from "./header";
import RegRecarga from "./regrecarga";
import CardOperadores from "./cardoperadores";

function Operadores() {
  const content = css`
    width: 360px;
    margin: 0 auto;
  `;
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
  const title = css`
    margin: 0 auto;
  `;
  const wrapper = css`
    padding: 33px 24px;
  `;
  const subtitle = css`
    display: flex;
    justify-content: space-between;
    p {
      font-size: 12px;
      margin-top: 24px;
      margin-bottom: 16px;
      color: #adadad;
      font-weight: bold;
    }
  `;
  const sliderimg = css`
    border-radius: 10px;
    margin: 10px 60px;
    height: 250px;
    width: auto;
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
  const icon = css`
    width: 26px;
    height: 26px;
    padding: 0px;
    border-radius: 100%;
  `;

  return (
    <div css={content}>
      <Header redirect="/" />
      <div css={wrapper}>
        <h2 css={title}>Recargas</h2>
        <div>
          <div css={subtitle}>
            <p>Operadores disponibles</p>
          </div>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
            `}
          >
            <CardOperadores oper={movistar} label="Movistar" />
            <CardOperadores oper={claro} label="Claro" />
            <CardOperadores oper={entel} label="Entel" />
            <CardOperadores oper={wom} label="WOM" />
            <CardOperadores oper={virgin} label="Virgin" />
            <CardOperadores oper={vtr} label="VTR móvil" />
            <CardOperadores oper={simple} label="Simple móvil" />
          </div>
          <div css={subtitle}>
            <p>Promociones para recargas:</p>
          </div>
          <AliceCarousel autoPlay autoPlayInterval="3000">
            <img src={wom1} css={sliderimg} />
            <img src={simple1} css={sliderimg} />
            <img src={virgin1} css={sliderimg} />
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
}
export default Operadores;
