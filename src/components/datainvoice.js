/** @jsx jsx */
import { jsx, css } from "@emotion/core";

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
