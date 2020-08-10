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
import Header from "./header";
import CardOperadores from "./cardoperadores";

function Operadores() {
  const content = css`
    width: 360px;
    margin: 0 auto;
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
          <AliceCarousel autoPlay autoPlayInterval={2000}>
            <img src={wom1} css={sliderimg} alt="operador" />
            <img src={simple1} css={sliderimg} alt="operador" />
            <img src={virgin1} css={sliderimg} alt="operador" />
          </AliceCarousel>
        </div>
      </div>
    </div>
  );
}
export default Operadores;
