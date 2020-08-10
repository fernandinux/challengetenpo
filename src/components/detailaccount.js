/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import arrowback from "../img/Arrowleft.svg";
import movistar from "../img/movistar.png";
import entel from "../img/entel.png";
import cge from "../img/cge.png";
import vtr from "../img/vtr.png";
import Cardfreq from "./cardfreq";
import footer from "../img/footerreporte.png";
import AliceCarousel from "react-alice-carousel";
import wallet from "../img/wallet.png";
import image2 from "../img/image2.png";
import image3 from "../img/image3.png";
import image4 from "../img/image4.png";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";
import Header from "./header";
import Cardreporte from "./cardreporte";
import CardDetail from "./cardDetail";

function DetailAccount() {
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
    color: #595959;
    font-size: 16px;
    margin: 0px;
  `;
  const wrapper = css`
    padding: 33px 24px;
  `;
  const subtitle = css`
    display: flex;
    justify-content: space-around;
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
  const total = css`
    color: #595959;
    font-size: 24px;
    font-weight: bold;
    margin: 0px;
  `;

  return (
    <div css={content}>
      <Header redirect="/misgastos" />
      <div css={wrapper}>
        <div
          css={css`
            width: 360px;
            height: 100px;
            background: #00baa4;
            margin: -33px -24px 0px -24px;

            position: relative;
          `}
        >
          <div
            css={css`
              position: absolute;
              top: 50px;
              padding: 0px 24px;
              width: 312px;
            `}
          >
            <div
              css={css`
                background: white;
                padding: 20px 0px;
                border-radius: 10px;
                text-align: center;
              `}
            >
              <div
                css={css`
                  display: flex;
                  justify-content: center;
                  align-items: center;
                `}
              >
                <img
                  css={css`
                    width: 40px;
                    height: 40px;
                    margin-right: 10px;
                    border-radius: 100%;
                  `}
                  src={movistar}
                  alt="movistar"
                />

                <p
                  css={css`
                    margin: 0px 10px;
                  `}
                >
                  Mi celular
                </p>
                <h3 css={title}>956734234</h3>
              </div>
            </div>
            <div>
              <div css={subtitle}>
                <p>N° Operación:</p>
                <p>Fecha</p>
                <p>Monto</p>
              </div>

              <CardDetail
                operation="1245789632"
                fecha="27/07/2020"
                monto="$ 3.000"
              />

              <CardDetail
                operation="1245789611"
                fecha="12/07/2020"
                monto="$ 2.500"
              />
              <CardDetail
                operation="1245789543"
                fecha="06/07/2020"
                monto="$ 3.500"
              />
              <CardDetail
                operation="1245789367"
                fecha="17/07/2020"
                monto="$ 2.000"
              />
            </div>

            <img
              css={css`
                width: 312px;
                height: auto;
              `}
              src={footer}
              alt="footer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailAccount;
