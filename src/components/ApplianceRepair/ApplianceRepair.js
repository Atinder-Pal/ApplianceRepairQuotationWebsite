import React, { useState } from "react";
import styles from "./ApplianceRepair.module.css";
import { useDispatch } from "react-redux";
import { quote } from "../../actions/repair";
import { useHistory } from "react-router-dom";
import {
  MDBIcon,
  MDBBtn,
  MDBBtnGroup,
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";

const ApplianceRepair = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [categoryValue, setCategoryValue] = useState("");
  const [brandValue, setBrandValue] = useState("");
  const [issueValue, setIssueValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  // const handleChangeCategory = (e) => {
  //   setCategoryValue(e.target.value);
  // };
  const handleChangeBrand = (e) => {
    setBrandValue(e.target.value);
  };

  const handleChangeName = (e) => {
    setNameValue(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const handleChangeIssue = (e) => {
    setIssueValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const issueRate = Number(issueValue.replace(/[^0-9\.]+/g, ""));
    const issueName = issueValue.replace(/[^a-zA-Z ]+/g, "");
    const brandRate = Number(brandValue.replace(/[^0-9\.]+/g, ""));
    const brandName = brandValue.replace(/[^a-zA-Z ]+/g, "");
    const price = 50 + 50 * issueRate * brandRate;
    dispatch(
      quote([nameValue, emailValue, brandName, categoryValue, issueName, price])
    );
    history.push("/quotation");
  };
  console.log(categoryValue);
  const selectIssueComponent = (categoryValue) => {
    if (categoryValue === "Washer") {
      return (
        <>
          <label htmlFor="chooseIssue">Select Issue</label>
          <select
            id="chooseIssue"
            value={issueValue}
            onChange={handleChangeIssue}
            className="browser-default custom-select"
          >
            <option value="">Select Issue</option>
            <option value="Does not drain0.8">Does not drain</option>
            <option value="Does not fill1">Does not fill</option>
            <option value="Does not spin1.5">Does not spin</option>
            <option value="Does not start1">Does not start</option>
            <option value="Works intermittently2">Works intermittently</option>
          </select>
        </>
      );
    } else if (categoryValue === "Dryer") {
      return (
        <>
          <label htmlFor="chooseIssue">Select Issue</label>
          <select
            id="chooseIssue"
            value={issueValue}
            onChange={handleChangeIssue}
            className="browser-default custom-select"
          >
            <option value="">Select Issue</option>
            <option value="No Heat1.5">No Heat</option>
            <option value="No Power1">No Power</option>
            <option value="Does not start1">Does not start</option>
            <option value="Works intermittently1">Works intermittently</option>
          </select>
        </>
      );
    } else if (categoryValue === "Fridge") {
      return (
        <>
          <label htmlFor="chooseIssue">Select Issue</label>
          <select
            id="chooseIssue"
            value={issueValue}
            onChange={handleChangeIssue}
            className="browser-default custom-select"
          >
            <option value="">Select Issue</option>
            <option value="Fridge leaks1.2">Fridge leaks</option>
            <option value="Both compartments (Fridge & Freezer) do not cool1.7">
              Both compartments (Fridge & Freezer) do not cool
            </option>
            <option value="Fridge does not cool1.2">Fridge does not cool</option>
            <option value="Freezer does not cool1.2">Freezer does not cool</option>
            <option value="Issue with Icemaker2">Issue with Icemaker</option>
          </select>
        </>
      );
    } else if (categoryValue === "Range") {
      return (
        <>
          <label htmlFor="chooseIssue">Select Issue</label>
          <select
            id="chooseIssue"
            value={issueValue}
            onChange={handleChangeIssue}
            className="browser-default custom-select"
          >
            <option value="">Select Issue</option>
            <option value="Element stuck on high1.2">
              Element stuck on high
            </option>
            <option value="Broil option does not work1.7">Broil option does not work</option>
            <option value="Bake option does not work1.2">Bake option does not work</option>
            <option value="Element does not heat up1.2">Element does not heat up</option>
          </select>
        </>
      );
    } else {
      return (
        <>
          <label htmlFor="chooseIssue">Select Issue</label>
          <select
            id="chooseIssue"
            value={issueValue}
            onChange={handleChangeIssue}
            className="browser-default custom-select"
          >
            <option value="">Select Issue</option>
            <option>Please Select the Appliance Category First</option>
          </select>
        </>
      );
    }
  };

  return (
    <>
      <MDBContainer className={styles.repairPage}>
        <p className={`${styles.fillForm} text-center font-weight-bold`}>
          {props.someText}
        </p>
        <form onSubmit={handleSubmit}>
          <MDBRow>
            <MDBCol
              md="4"
              className="d-flex align-items-center justify-content-center"
            >
              <MDBBtnGroup vertical>
                <p className={`text-danger ${styles.labelAppliance}`}>
                  Choose your appliance
                </p>
                <MDBBtn
                  color="amber"
                  value="Washer"
                  onClick={() => {
                    setCategoryValue("Washer");
                  }}
                >
                  {categoryValue === "Washer" ? (
                    <MDBIcon icon="check-circle" />
                  ) : (
                    ""
                  )}{" "}
                  Washer
                </MDBBtn>
                <MDBBtn
                  color="amber"
                  value="Dryer"
                  onClick={() => {
                    setCategoryValue("Dryer");
                  }}
                >
                  {categoryValue === "Dryer" ? (
                    <MDBIcon icon="check-circle" />
                  ) : (
                    ""
                  )}{" "}
                  Dryer
                </MDBBtn>
                <MDBBtn
                  color="amber"
                  value="Range"
                  onClick={() => {
                    setCategoryValue("Range");
                  }}
                >
                  {categoryValue === "Range" ? (
                    <MDBIcon icon="check-circle" />
                  ) : (
                    ""
                  )}{" "}
                  Range
                </MDBBtn>
                <MDBBtn
                  color="amber"
                  value="Fridge"
                  onClick={() => {
                    setCategoryValue("Fridge");
                  }}
                >
                  {categoryValue === "Fridge" ? (
                    <MDBIcon icon="check-circle" />
                  ) : (
                    ""
                  )}{" "}
                  Fridge
                </MDBBtn>
              </MDBBtnGroup>
            </MDBCol>
            <MDBCol md="8">
              <MDBInput
                label="Your name"
                icon="user"
                group
                type="text"
                validate
                error="wrong"
                success="right"
                value={nameValue}
                onChange={handleChangeName}
              />
              <MDBInput
                label="Your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                value={emailValue}
                onChange={handleChangeEmail}
              />
              <label htmlFor="chooseBrand">Select your Brand</label>
              <select
                id="chooseBrand"
                value={brandValue}
                className={`browser-default custom-select ${styles.brandSelect}`}
                onChange={handleChangeBrand}
              >
                <option value="">Choose your Brand</option>
                <option value="Whirlpool1.4">Whirlpool</option>
                <option value="Electrolux1.6">Electrolux</option>
                <option value="LG1.2">LG</option>
                <option value="Samsung1">Samsung</option>
              </select>
              {selectIssueComponent(categoryValue)}
              <div className={`text-center ${styles.submitButton}`}>
                <MDBBtn
                  gradient="aqua"
                  type="submit"
                  disabled={
                    !(
                      categoryValue &&
                      nameValue &&
                      emailValue &&
                      brandValue &&
                      issueValue
                    )
                  }
                >
                  Submit
                </MDBBtn>
              </div>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
    </>
  );
};

export default ApplianceRepair;
