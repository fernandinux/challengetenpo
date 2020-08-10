/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import movistar from "../img/movistar.png";
import recarga1 from "../img/recarga1.png";
import recarga2 from "../img/recarga2.png";
import recarga3 from "../img/recarga3.png";
import "react-alice-carousel/lib/alice-carousel.css";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";
import NumberFormat from "react-number-format";
import { useState } from "react";
import Header from "./header";

function Recarga() {
  const [number, setNumber] = useState(10000);
  const history = useHistory();
  const icon = css`
    width: 37px;
    border-radius: 50%;
    height: 37px;
    padding: 0px;
    margin: 0px;
  `;
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
  const fieldStyle = css`
    width: 312px;
    border: none;
    background: none;
    font-size: 20px;
    height: 24px;
    margin-bottom: 60px;
    border-bottom: 1px solid #595959;
    -webkit-appearance: none;
    -moz-appearance: textfield;
  `;
  const formStyle = css`
    margin: 50px 0px 100px 0px;
  `;
  const buttonHover = css`
    color: white;
    width: 312px;
    border-radius: 10px;
    background: #00baa4;
    height: 56px;
    border: none;
    font-size: 14px;
  `;
  const buttonStyle = css({
    color: "#adadad",
    width: "312px",
    borderRadius: "10px",
    background: "none",
    height: "56px",
    border: "1px solid #adadad",
    fontSize: "14px",
    "&:hover": buttonHover,
  });
  return (
    <div css={content}>
      <Header redirect="/freqoper" />
      <div css={wrapper}>
        <h2 css={title}>Recarga frecuente</h2>
        <div
          css={css`
            display: flex;
            align-items: center;
            margin-top: 50px;
          `}
        >
          <img css={icon} src={movistar} alt="movistar" />
          <span
            css={css`
              margin-left: 8px;
            `}
          >
            La ultima vez usaste estos datos
          </span>
        </div>

        <Formik
          initialValues={{ telefono: "985254741", monto: "" }}
          onSubmit={(values) => {
            console.log(values);
            history.push("/rechargesuccess");
          }}
        >
          {({ errors, touched }) => (
            <Form css={formStyle}>
              <Field css={fieldStyle} name="telefono" type="number" />

              {errors.telefono && touched.telefono ? (
                <div>{errors.telefono}</div>
              ) : null}
              <NumberFormat
                css={fieldStyle}
                name="monto"
                thousandSeparator="."
                decimalSeparator=","
                prefix={"$"}
                onValueChange={(value) => setNumber(value.floatValue)}
                value={number}
              />
              {/* <Field css={fieldStyle} name="monto" type="text" /> */}

              {errors.monto && touched.monto ? <div>{errors.monto}</div> : null}

              <button css={buttonStyle} type="submit">
                CONTINUAR
              </button>
            </Form>
          )}
        </Formik>
        <p
          css={css`
            margin: 20px 0px;
            color: #595959;
          `}
        >
          Elige tu bolsa:
        </p>
        <img
          css={css`
            width: 312px;
            height: auto;
            margin-bottom: 10px;
          `}
          src={recarga1}
          alt="recarga"
        />
        <img
          css={css`
            width: 312px;
            height: auto;
            margin-bottom: 10px;
          `}
          src={recarga2}
          alt="recarga"
        />
        <img
          css={css`
            width: 312px;
            height: auto;
            margin-bottom: 10px;
          `}
          src={recarga3}
          alt="recarga"
        />
      </div>
    </div>
  );
}
export default Recarga;
