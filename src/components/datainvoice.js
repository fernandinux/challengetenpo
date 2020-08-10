/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import arrowback from "../img/Arrowleft.svg";
import movistar from "../img/movistar.png";
import entel from "../img/entel.png";
import cge from "../img/cge.png";
import vtr from "../img/vtr.png";
import Cardfreq from "./cardfreq";
import services from "../img/serviceable.png";
import AliceCarousel from "react-alice-carousel";
import recarga1 from "../img/recarga1.png";
import recarga2 from "../img/recarga2.png";
import recarga3 from "../img/recarga3.png";
import "react-alice-carousel/lib/alice-carousel.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import { useState } from "react";
import Header from "./header";
import success from "../img/success.svg";

function DataInvoice(props) {
  return (
    <div
      css={css`
        display: flex;
        margin-bottom: 16px;
      `}
    >
      <h3
        css={css`
          margin: 0px;
          color: #595959;
          font-size: 12px;
          font-weight: bold;
          font-style: normal;
          line-height: normal;
          width: 105px;
        `}
      >
        {props.label}:
      </h3>
      <span
        css={css`
          margin: 0px;
          color: #595959;
          font-size: 12px;
          font-weight: normal;
          font-style: normal;
          line-height: normal;
        `}
      >
        {props.text}
      </span>
    </div>
  );
}
export default DataInvoice;
