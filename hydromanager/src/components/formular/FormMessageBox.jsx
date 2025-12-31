function FormMessageBox({messageStyle,messageType,messageText}) {
  return (
    <div className={`formular-header-infobox ${messageStyle}`}>
      <h1>{messageType}</h1>
      <p className="formular-header-infobox-text">{messageText}</p>
    </div>
  );
}

export default FormMessageBox;
