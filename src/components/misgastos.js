/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import movistar from "../img/movistar.png";
import entel from "../img/entel.png";
import cge from "../img/cge.png";
import vtr from "../img/vtr.png";
import footer from "../img/footerreporte.png";
import wallet from "../img/wallet.png";
import "react-alice-carousel/lib/alice-carousel.css";
import Header from "./header";
import Cardreporte from "./cardreporte";

function Misgastos() {
  const content = css`
    width: 360px;
    margin: 0 auto;
  `;
  const title = css`
    color: #595959;
    font-size: 12px;
    margin-top: 15px;
    margin-bottom: 0px;
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
  const total = css`
    color: #595959;
    font-size: 24px;
    font-weight: bold;
    margin: 0px;
  `;

  return (
    <div css={content}>
      <Header redirect="/" />
      <div css={wrapper}>
        <div
          css={css`
            width: 360px;
            height: 150px;
            background: #00baa4;
            margin: -33px -24px 0px -24px;

            position: relative;
          `}
        >
          <div
            css={css`
              position: absolute;
              top: 80px;
              padding: 0px 24px;
              width: 312px;
            `}
          >
            <div
              css={css`
                background: white;
                padding: 24px 0px;
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
                  `}
                  src={wallet}
                  alt="wallet"
                />
                <span css={total}>$ 350.000</span>
              </div>

              <h3 css={title}>Total de gastos en el ultimo mes</h3>
            </div>
            <div>
              <div css={subtitle}>
                <p>Gastos del ultimo mes:</p>
                <p>Filtrar</p>
              </div>

              <Cardreporte
                company="Movistar"
                description="Mi celular"
                identifier="956734234"
                icon={movistar}
                coins="6"
              />

              <Cardreporte
                company="Entel"
                description="Papa celular"
                identifier="954390234"
                icon={entel}
                coins="5"
              />
              <Cardreporte
                company="VTR Rut"
                description="Mi depa"
                identifier="27.022.624-5"
                icon={vtr}
                coins="4"
              />
              <Cardreporte
                company="CGE"
                description="Luz depa"
                identifier="125478"
                icon={cge}
                coins="3"
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
export default Misgastos;
