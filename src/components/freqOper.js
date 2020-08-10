/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import movistar from "../img/movistar.png";
import entel from "../img/entel.png";
import cge from "../img/cge.png";
import vtr from "../img/vtr.png";
import Cardfreq from "./cardfreq";
import services from "../img/serviceable.png";
import AliceCarousel from "react-alice-carousel";
import image1 from "../img/image1.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import image4 from "../img/image4.png";
import "react-alice-carousel/lib/alice-carousel.css";
import Header from "./header";

function FreqOper() {
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
    width: 290px;
  `;

  return (
    <div css={content}>
      <Header redirect="/" />
      <div css={wrapper}>
        <h2 css={title}>Operaciones frecuentes</h2>
        <div>
          <div css={subtitle}>
            <p>Recargas frecuentes</p>
            <p>Editar</p>
          </div>

          <Cardfreq
            company="Movistar"
            description="Mi celular"
            identifier="956734234"
            icon={movistar}
          />

          <Cardfreq
            company="Entel"
            description="Papa celular"
            identifier="954390234"
            icon={entel}
          />
        </div>
        <div>
          <div css={subtitle}>
            <p>Pagos de cuentas frecuentes</p>
            <p>Editar</p>
          </div>
          <Cardfreq
            company="VTR Rut"
            description="Mi depa"
            identifier="27.022.624-5"
            icon={vtr}
          />
          <Cardfreq
            company="CGE"
            description="Luz depa"
            identifier="125478"
            icon={cge}
          />
        </div>

        <img
          css={css`
            width: 312px;
            height: auto;
          `}
          src={services}
          alt="services"
        />
        <AliceCarousel autoPlay autoPlayInterval={2000}>
          <img src={image1} css={sliderimg} alt="beneficios" />
          <img src={image2} css={sliderimg} alt="beneficios" />
          <img src={image3} css={sliderimg} alt="beneficios" />
          <img src={image4} css={sliderimg} alt="beneficios" />
        </AliceCarousel>
      </div>
    </div>
  );
}
export default FreqOper;
