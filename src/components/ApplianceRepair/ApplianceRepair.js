import React, { useState } from "react";
import styles from "./ApplianceRepair.module.css";
import cx from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { quote } from "../../actions/repair";
import { useHistory } from "react-router-dom";

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
    const price = 50 + 50 * Number(issueValue);
    dispatch(quote([nameValue, emailValue, brandValue, issueValue, price]));
    history.push("/quotation");
  };

  const selectIssueComponent = (categoryValue) => {
    if (categoryValue === "washer") {
      return (
        <>
          <label htmlFor="chooseIssue">Select Issue</label>
          <select
            id="chooseIssue"
            value={issueValue}
            onChange={handleChangeIssue}
          >
            <option value="">Select Issue</option>
            <option value="0.8">Does not drain</option>
            <option value="1">Does not fill</option>
            <option value="1.5">Does not spin</option>
            <option value="1">Does not start</option>
            <option value="2">Work intermittently</option>
          </select>
        </>
      );
    } else if (categoryValue === "dryer") {
      return (
        <>
          <label htmlFor="chooseIssue">Select Issue</label>
          <select
            id="chooseIssue"
            value={issueValue}
            onChange={handleChangeIssue}
          >
            <option value="">Select Issue</option>
            <option value="1.5">No Heat</option>
            <option value="1">No Power</option>
            <option value="1">Does not Start</option>
            <option value="1">Works intermittently</option>
          </select>
        </>
      );
    } else if (categoryValue === "fridge") {
      return (
        <>
          <label htmlFor="chooseIssue">Select Issue</label>
          <select
            id="chooseIssue"
            value={issueValue}
            onChange={handleChangeIssue}
          >
            <option value="">Select Issue</option>
            <option value="1.2">Leaking fridge</option>
            <option value="1.7">Both compartments not cooling</option>
            <option value="1.2">Fridge not cooling</option>
            <option value="1.2">Freezer not cooling</option>
            <option value="2">Icemaker issue</option>
          </select>
        </>
      );
    } else if (categoryValue === "range") {
      return (
        <>
          <label htmlFor="chooseIssue">Select Issue</label>
          <select
            id="chooseIssue"
            value={issueValue}
            onChange={handleChangeIssue}
          >
            <option value="">Select Issue</option>
            <option value="1.2">Element stuck on high</option>
            <option value="1.7">Broil won't working</option>
            <option value="1.2">Bake won't working</option>
            <option value="1.2">Element won't heat</option>
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
      <section className={styles.applianceRepair}>
        <form className={styles.repairForm} onSubmit={handleSubmit}>
          <label htmlFor="chooseCategory">Select Appliance Category</label>
          <select
            id="chooseCategory"
            value={categoryValue}
            onChange={handleChangeCategory}
          >
            <option value="">Choose your appliance</option>
            <option value="washer">Washer</option>
            <option value="dryer">Dryer</option>
            <option value="rang">Range</option>
            <option value="fridge">Fridge</option>
          </select>
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
            <option value="w">Whirlpool</option>
            <option value="e">Electrolux</option>
            <option value="l">LG</option>
            <option value="s">Samsung</option>
          </select>
          {selectIssueComponent(categoryValue)}
          <button className={styles.button} type="submit">
            SUBMIT
          </button>
        </form>
      </section>
    </>
  );
};

export default ApplianceRepair;
