import React from "react";
import "./qr-view.scss";

import QRCode from "qrcode.react";

function QRview(props) {
  return (
    <div>
      <h2>Payment Successfull </h2>
      <img
        className="celebrate-img"
        src="https://image.flaticon.com/icons/svg/864/864763.svg"
        alt=""
      />

      <h3>Here's your Ticket !!</h3>
      <QRCode
        value={props.msg}
        size={400}
        bgColor={"#252a34"}
        fgColor={"#eaeaea"}
        level={"L"}
        includeMargin={false}
        renderAs={"svg"}
      />
    </div>
  );
}

export default QRview;

