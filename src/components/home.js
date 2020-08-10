/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import home1 from "../img/home1.png";
import pagodsc from "../img/pagodecuentas.png";
import recargas from "../img/recargas.png";
import home2 from "../img/home2.png";
import homefooter from "../img/homefooter.png";
import operfeq from "../img/operfeq.png";
import misgastos from "../img/misgastos.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 360px;
        margin: 0px auto;
      `}
    >
      <img
        src={home1}
        alt="home1"
        css={css`
          width: 375px;
        `}
      />
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          margin-bottom: 13px;
        `}
      >
        <Link to="/freqoper">
          <img
            src={operfeq}
            alt="pagodsc"
            css={css`
              width: 160px;
              cursor: pointer;
            `}
          />
        </Link>
        <Link to="/misgastos">
          <img
            src={misgastos}
            alt="recargas"
            css={css`
              width: 160px;
            `}
          />
        </Link>
      </div>
      <div
        css={css`
          display: flex;
          justify-content: space-around;
          margin-bottom: 13px;
        `}
      >
        <Link to="/newrecarga">
          <img
            src={pagodsc}
            alt="pagodsc"
            css={css`
              width: 160px;
            `}
          />
        </Link>

        <Link to="/newrecarga">
          <img
            src={recargas}
            alt="recargas"
            css={css`
              width: 160px;
            `}
          />
        </Link>
      </div>
      <img
        src={home2}
        alt="home2"
        css={css`
          width: 375px;
        `}
      />
      <img
        src={homefooter}
        alt="homefooter"
        css={css`
          width: 375px;
          position: fixed;
          bottom: 0;
        `}
      />
    </div>
  );
}
export default Home;
