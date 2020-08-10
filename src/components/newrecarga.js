/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import movil from "../img/movil.svg";
import tv from "../img/tv.svg";
import wan from "../img/wan.svg";
import telf from "../img/telf.svg";
import AliceCarousel from "react-alice-carousel";
import image1 from "../img/image1.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import image4 from "../img/image4.png";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import Header from "./header";

function NewRecargar() {
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
    width: auto;
    height: 26px;
    padding: 0px;
  `;

  return (
    <div css={content}>
      <Header redirect="/" />
      <div css={wrapper}>
        <h2 css={title}>Recargas</h2>
        <div>
          <div css={subtitle}>
            <p>Servicios disponibles</p>
          </div>
          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
            `}
          >
            <Link
              to="/operadores"
              css={css`
                text-decoration: none;
              `}
            >
              <div css={card}>
                <img css={icon} src={movil} alt="movil" />
                <h3>Telefonía Móvil</h3>
              </div>
            </Link>

            <div css={card}>
              <img css={icon} src={tv} alt="tv" />
              <h3>Televisión</h3>
            </div>
            <div css={card}>
              <img css={icon} src={wan} alt="wan" />
              <h3>Banda ancha Móvil</h3>
            </div>
            <div css={card}>
              <img css={icon} src={telf} alt="telf" />
              <h3>Telefonía Fija</h3>
            </div>
          </div>
          <div css={subtitle}>
            <p>Beneficios por tus recargas:</p>
          </div>
        </div>

        <AliceCarousel autoPlay autoPlayInterval={2000}>
          <img src={image1} css={sliderimg} alt="beneficio" />
          <img src={image2} css={sliderimg} alt="beneficio" />
          <img src={image3} css={sliderimg} alt="beneficio" />
          <img src={image4} css={sliderimg} alt="beneficio" />
        </AliceCarousel>
      </div>
    </div>
  );
}
export default NewRecargar;
