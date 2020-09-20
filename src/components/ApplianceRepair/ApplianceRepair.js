import React, { useState } from "react";
import styles from "./ApplianceRepair.module.css";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { quote } from "../../actions/repair";
import { useHistory } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBBtn,
  MDBBtnGroup,
  MDBInput,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";

const ApplianceRepair = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [categoryValue, setCategoryValue] = useState("");
  const [brandValue, setBrandValue] = useState("");
  const [issueValue, setIssueValue] = useState("");
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [showMessage1, setShowMessage1] = useState(false);
  const [showMessage2, setShowMessage2] = useState(false);

  const handleChangeCategory = (e) => {
    setCategoryValue(e.target.value);
  };
  const handleChangeBrand = (e) => {
    setBrandValue(e.target.value);
  };

  const handleChangeName = (e) => {
    if (!e.target.value) {
      setShowMessage1(true);
    }
    setNameValue(e.target.value);
  };
  const handleChangeEmail = (e) => {
    if (!e.target.value) {
      setShowMessage2(true);
    }
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

  const selectIssueComponent = (categoryValue) => {
    if (categoryValue === "Washer") {
      return (
        <>
          <label htmlFor="chooseIssue">Select Issue</label>
          <select
            id="chooseIssue"
            value={issueValue}
            onChange={handleChangeIssue}
          >
            <option value="">Select Issue</option>
            <option value="Does not drain0.8">Does not drain</option>
            <option value="Does not fill1">Does not fill</option>
            <option value="Does not spin1.5">Does not spin</option>
            <option value="Does not start1">Does not start</option>
            <option value="Work intermittently2">Work intermittently</option>
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
          >
            <option value="">Select Issue</option>
            <option value="No Heat1.5">No Heat</option>
            <option value="No Power1">No Power</option>
            <option value="Does not Start1">Does not Start</option>
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
          >
            <option value="">Select Issue</option>
            <option value="Leaking fridge1.2">Leaking fridge</option>
            <option value="Both compartments not cooling1.7">
              Both compartments not cooling
            </option>
            <option value="Fridge not cooling1.2">Fridge not cooling</option>
            <option value="Freezer not cooling1.2">Freezer not cooling</option>
            <option value="Icemaker issue2">Icemaker issue</option>
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
          >
            <option value="">Select Issue</option>
            <option value="Element stuck on high1.2">
              Element stuck on high
            </option>
            <option value="Broil won't working1.7">Broil won't working</option>
            <option value="Bake won't working1.2">Bake won't working</option>
            <option value="Element won't heat1.2">Element won't heat</option>
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
      <MDBContainer>
        <form onSubmit={handleSubmit}>
          <MDBRow>
            <MDBCol md="4">
              {/* <label htmlFor="chooseCategory">
                  Select Appliance Category
                </label>
                <select
                  id="chooseCategory"
                  value={categoryValue}
                  onChange={handleChangeCategory}
                >
                  <option value="">Choose your appliance</option>
                  <option value="Washer">Washer</option>
                  <option value="Dryer">Dryer</option>
                  <option value="Range">Range</option>
                  <option value="Fridge">Fridge</option>
                </select> */}
              <div className="text-center">
                <MDBBtnGroup vertical>
                  <p>Choose your appliance</p>
                  <MDBBtn color="amber">Washer</MDBBtn>
                  <MDBBtn color="amber">Dryer</MDBBtn>
                  <MDBBtn color="amber">Range</MDBBtn>
                  <MDBBtn color="amber">Fridge</MDBBtn>
                </MDBBtnGroup>
              </div>
            </MDBCol>
            <MDBCol md="8">
              <label htmlFor="name">Name:&nbsp;</label>
              <input
                id="name"
                type="text"
                value={nameValue}
                onChange={handleChangeName}
              />
              {showMessage1 ? (
                <h4 className={styles.danger}>Please input your name</h4>
              ) : (
                ""
              )}
              <label htmlFor="email">Email: &nbsp;</label>
              <input
                id="email"
                type="email"
                value={emailValue}
                onChange={handleChangeEmail}
              />
              {showMessage2 ? (
                <h4 className={styles.danger}>Please input your email</h4>
              ) : (
                ""
              )}

              <label htmlFor="chooseBrand">Select your Brand</label>
              <select
                id="chooseBrand"
                value={brandValue}
                onChange={handleChangeBrand}
              >
                <option value="">Choose your Brand</option>
                <option value="Whirlpool1.4">Whirlpool</option>
                <option value="Electrolux1.6">Electrolux</option>
                <option value="LG1.2">LG</option>
                <option value="Samsung1">Samsung</option>
              </select>
              {selectIssueComponent(categoryValue)}
              <button className={styles.button} type="submit">
                SUBMIT
              </button>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>
    </>
  );
};

export default ApplianceRepair;
