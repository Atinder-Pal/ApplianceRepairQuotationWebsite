import React from "react";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';


const QuotationForm = () => {
  const quoteInfo = useSelector(state => state.repair);
  
  // Print the Quotation Form in PDF
  // Citation
  //https://stackoverflow.com/questions/44989119/generating-a-pdf-file-from-react-components
  const printDocument =(e) => {
    e.preventDefault();
    const input = document.getElementById('downloadable-form');
    html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      });
  //End Citation
  }
  return (
    <div id='downloadable-form'>
      <h2>QuotationForm</h2>
        <p>Customer Name: <span>{ quoteInfo.newQuotation.name }</span></p>
        <p>Customer Email: <span>{ quoteInfo.newQuotation.email }</span></p>
        <p>Appliance: <span> { quoteInfo.newQuotation.appliance }</span></p>
        <p>Brand: <span> {quoteInfo.newQuotation.brand }</span></p>
        <p>Issue: <span> { quoteInfo.newQuotation.issue }</span></p>
        <p>Quote: $ <span> { quoteInfo.newQuotation.price }</span></p>  
        <button type='button' onClick={printDocument}>Download PDF</button><br />      
    </div>
  );
};

export default QuotationForm;
