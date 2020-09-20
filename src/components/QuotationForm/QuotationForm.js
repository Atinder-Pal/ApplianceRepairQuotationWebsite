import React from "react";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";


const QuotationForm = () => {
  const quoteInfo = useSelector(state => state.repair);
  return (
    <>
      <h2>QuotationForm</h2>
        <p>Customer Name: <span>{ quoteInfo.newQuotation.name }</span></p>
        <p>Customer Email: <span>{ quoteInfo.newQuotation.email }</span></p>
        <p>Appliance: <span> { quoteInfo.newQuotation.appliance }</span></p>
        <p>Brand: <span> {quoteInfo.newQuotation.brand }</span></p>
        <p>Issue: <span> { quoteInfo.newQuotation.issue }</span></p>
        <p>Quote: $ <span> { quoteInfo.newQuotation.price }</span></p>  
        <button type='button'>Download PDF</button><br />


      
    </>
  );
};

export default QuotationForm;
