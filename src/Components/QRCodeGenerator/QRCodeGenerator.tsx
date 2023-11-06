import React, {useCallback, useEffect, useState} from 'react';
import classes from './QRCodeGenerator.module.css';
import {getQRCode} from "../../utils/getQRCode";

const QRCodeGenerator: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [qr, setQr] = useState<string>("");

  const generateQRCode = useCallback(() => {
    const qrValue = getQRCode(value);
    if (!qrValue) return;
    setQr(qrValue);
  }, [value, setQr]);

  const downloadFile = useCallback(() => {
    const elm = document.createElement("a");
    elm.href = qr;
    elm.download = '443535_ouiuy';
    elm.click();
  }, [qr]);

  // https://www.npmjs.com/package/qrcode#installation

  // https://flaviocopes.com/nodemailer-how-to-embed-an-image-into-an-email/

  useEffect(()=>{
    console.log('qr', qr)
  },[qr])


  return (
    <div className={classes.container}>
      <div className={classes.title}>
        QRCodeGenerator
      </div>
      <input
        className={classes.input}
        placeholder="e.g. https://dev.to"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={generateQRCode} >
        Generate
      </button>

      {qr && (
        <div>
          <img src={qr} alt={'qr code'}/>
          <button onClick={downloadFile} >
            Download
          </button>
        </div>
      )}


    </div>
  );
};

export default QRCodeGenerator;
