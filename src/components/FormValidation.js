import React, { useState } from "react";

const FormValidation = () => {
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
  });
  const { name, address, email, mobile } = userData;
  const [errorMessage, setErrorMessage] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorMobile, setErrorMobile] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    let regName = /[^a-z]/gi;
    let regAdd = /[^a-z0-9\s]/gi;

    setErrorMessage("");
    setErrorAddress("");
    setErrorEmail("");
    setErrorMobile("");

    if (
      !name.length > 0 &&
      !address.length > 0 &&
      !email.length > 0 &&
      !mobile.length > 0
    ) {
      setErrorMessage("Please Fill input");
      setErrorAddress("Please Fill input");
      setErrorEmail("Please Fill input");
      setErrorMobile("Please Fill input");
      return;
    }

    if (regName.test(name)) {
      setErrorMessage("Name should contain only letters");
    }
    if (regAdd.test(address)) {
      setErrorAddress("Address should not contain special characters");
    }
    if (!/(.com)/gi.test(email) && !/[@]/gi.test(email)) {
      setErrorEmail("Email should contain @ and .com");
    }

    if (/[a-z]/gi.test(mobile) || mobile.length < 10) {
      setErrorMobile("Mobile number should not be more than 10 characters");
    }

    // setUserData({
    //   name: "",
    //   address: "",
    //   email: "",
    //   mobile: "",
    // });
  }

  function submitValue(e) {
    setErrorMessage("");
    setErrorAddress("");
    setErrorEmail("");
    setErrorMobile("");
    let key = e.target.name;
    let value = e.target.value;
    setUserData((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={name} onChange={submitValue} />
      {errorMessage && (
        <p className="errorMessage" style={{ color: "red" }}>
          {errorMessage}
        </p>
      )}
      <label>Address</label>
      <input
        type="text"
        name="address"
        value={address}
        onChange={submitValue}
      />
      {errorAddress && (
        <p className="errorMessage" style={{ color: "red" }}>
          {errorAddress}
        </p>
      )}
      <label>Email</label>
      <input type="text" name="email" value={email} onChange={submitValue} />
      {errorEmail && (
        <p className="errorMessage" style={{ color: "red" }}>
          {errorEmail}
        </p>
      )}
      <label>Mobile</label>
      <input type="text" name="mobile" value={mobile} onChange={submitValue} />
      {errorMobile && (
        <p className="errorMessage" style={{ color: "red" }}>
          {errorMobile}
        </p>
      )}
      <input type="submit" value={"Submit"} />
    </form>
  );
};

export default FormValidation;
