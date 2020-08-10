/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import check from "../img/checkgreen.svg";
import share from "../img/share.svg";
import boton from "../img/botonfqt.png";
import botongreen from "../img/botonfqtgreen.png";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { useState } from "react";
import Header from "./header";
import success from "../img/success.svg";
import DataInvoice from "./datainvoice";

function RechargeSuccess() {
  const [active, setActive] = useState(false);
  const number = 10000;
  const icon = css`
    width: 58px;
    height: 33px;
    padding: 0px;
    margin-top: 14px;
  `;
  const content = css`
    width: 360px;
    margin: 0 auto;
  `;

  const title = css`
    margin: 8px auto;
    color: white;
    font-size: 18px;
    font-weight: bold;
    font-style: normal;
    line-height: normal;
  `;
  const wrapper = css`
    padding: 0px 24px;
    position: relative;
  `;

  const numberStyle = css`
    color: #00baa4;
    font-size: 30px;
    font-weight: bold;
    font-style: normal;
    line-height: normal;
    border: none;
    background: none;
  `;
  
  const onShare = () => {
    /* Mostramos la opcion nativa de compartir si se navega desde Android */
    if (navigator.userAgent.match(/Android/i)) {
      /* Use the Web Share API from Chrome 61+ */
      navigator
        .share({
          title: 'Ticket de pago',
          url: 'https://i.imgur.com/ogZhmJc.png',
        })
        .then(console.log("Share successful"));
    } else {
      /* Caso contrario mostramos mensaje de alerta */
      alert(
        "Para activar la opcion nativa de compartir debes utilizar Chrome en Android"
      );
    }
  };
  const button = css`
    color: white;
    width: 312px;
    border-radius: 10px;
    background: #00baa4;
    height: 56px;
    border: none;
    font-size: 14px;
    margin-bottom: 32px;
  `;

  const activefqt = () => {
    setActive(!active);
  };

  return (
    <div css={content}>
      <Header redirect="/freqoper" />
      <div css={wrapper}>
        <div
          css={css`
            background: #201248;
            height: 168px;
            margin: 0px -24px 0px -24px;
            text-align: center;
          `}
        >
          <img css={icon} src={success} alt="success" />
          <h2 css={title}>Recarga exitosa</h2>
          <NumberFormat
            css={numberStyle}
            thousandSeparator="."
            decimalSeparator=","
            prefix={"$"}
            displayType={"text"}
            value={number}
          />
        </div>

        <div
          css={css`
            width: 312px;
            position: absolute;
            top: 127px;
            left: 7%;
          `}
        >
          <div
            css={css`
              background: white;
              border-radius: 10px;
              padding: 16px;
            `}
          >
            <DataInvoice label="Compañia" text="Movistar" />
            <DataInvoice label="Descripción" text="Mi celular" />
            <DataInvoice label="Cod. transacción" text="#9531254698871365" />
            <DataInvoice label="N° de teléfono" text="985641254" />
            <DataInvoice label="Fecha" text="27/11/2018" />
            <DataInvoice label="Hora" text="14:24" />
            <hr
              size="1"
              css={css`
                color: #e7e7e7;
              `}
            />
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <h3
                css={css`
                  color: #595959;
                  font-size: 14px;
                  font-weight: normal;
                  font-style: normal;
                  line-height: normal;
                  margin-right: 10px;
                  width: 250px;
                `}
              >
                Agregar a recargas frecuentes
              </h3>
              <img
                src={active ? botongreen : boton}
                alt="boton"
                onClick={activefqt}
                css={css`
                  width: 41px;
                  height: 26px;
                  cursor: pointer;
                `}
              />
            </div>
            <div
              css={css`
                display: flex;
                align-items: center;
              `}
            >
              <h3
                css={css`
                  color: #595959;
                  font-size: 14px;
                  font-weight: normal;
                  font-style: normal;
                  line-height: normal;
                  margin-right: 10px;
                  width: 250px;
                `}
              >
                Comparte el comprobante de esta recarga
              </h3>
              <img
                src={share}
                alt="share"
                css={css`
                  width: 30px;
                  height: 30px;
                  cursor: pointer;
                `}
                onClick={onShare}
              />
            </div>
          </div>
          <div
            css={css`
              width: 100%;
            `}
          >
            <div>
              <h3
                css={css`
                  color: #595959;
                  font-size: 12px;
                  font-weight: normal;
                  font-style: normal;
                  line-height: normal;
                  margin-right: 15px;
                  span {
                    font-weight: bold;
                  }
                `}
              >
                Te hemos enviado una copia de esta confirmación a tu
                <span> correo@email.com</span>
              </h3>
            </div>
            <Link to="/freqoper">
              <button css={button}>HACER OTRA RECARGAR</button>
            </Link>
            <div
              css={css`
                text-align: center;
              `}
            >
              <Link
                css={css`
                  text-decoration: none;
                  color: #333333;
                  font-size: 12px;
                  font-weight: bold;
                  font-style: normal;
                  line-height: normal;
                `}
                to="/"
              >
                VOLVER AL INICIO
              </Link>
            </div>
            <div
              css={css`
                display: ${active ? "flex" : "none"};
                justify-content: center;
                align-items: center;
                background: #201248;
                margin: 0px -24px 0px -24px;
              `}
            >
              <img
                src={check}
                alt="check"
                css={css`
                  width: 16px;
                  height: 12px;
                `}
              />
              <h3
                css={css`
                  text-decoration: none;
                  color: white;
                  font-size: 13px;
                  font-weight: normal;
                  font-style: normal;
                  line-height: normal;
                  margin-left: 5px;
                `}
              >
                !Cuenta agregada a recargas frecuentes!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RechargeSuccess;
