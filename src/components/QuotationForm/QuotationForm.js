import React from "react";
import { useSelector } from "react-redux";
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
import styles from "./QuotationForm.module.css";
import { MDBIcon } from "mdbreact";
import logo from "../../img/landing/logo-makr.png"

const QuotationForm = () => {
  const quoteInfo = useSelector(state => state.repair);
  
  // Print the Quotation Form in PDF
  // Citation
  //https://stackoverflow.com/questions/44989119/generating-a-pdf-file-from-react-components
  const printDocument =(e) => {
    e.preventDefault();
       
    const input = document.getElementById('downloadableForm');
    html2canvas(input, { scale:1 }).then((canvas) => {        
        const imgData = canvas.toDataURL('image/png', 1.0);
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 29, 20, 150, 100);        
        pdf.save("quote.pdf");
      });
  //End Citation
  }
  return (    
      <article  > 
        <h2 className={styles.screenReaderText}>Quotation Form</h2>      
        <div id='downloadableForm' className={styles.quotationForm}>
        <section>
          <img src={logo} alt="Company Logo"/>
          <h2>Appliance Repair Quote <MDBIcon icon="file-invoice-dollar" /></h2>
        </section>
        <table>
            <tbody>
              <tr>
                <td >Company Name:</td>
                <td>ApplianceMaster.Ltd</td>
              </tr>
              <tr>
                <td>Customer Name:</td>
                <td>{ quoteInfo.newQuotation.name }</td>
              </tr>
              <tr>
                <td>Customer Email:</td>
                <td>{ quoteInfo.newQuotation.email }</td>
              </tr>
              <tr>
                <td>Appliance:</td>
                <td>{ quoteInfo.newQuotation.appliance }</td>
              </tr>
              <tr>
                <td>Brand:</td>
                <td>{quoteInfo.newQuotation.brand }</td>
              </tr>
              <tr>
                <td>Issue:</td>
                <td>{ quoteInfo.newQuotation.issue }</td>
              </tr>              
              <tr>              
                <td>Quote:</td>
                <td>${ quoteInfo.newQuotation.price }</td>              
              </tr>              
            </tbody>              
          </table>  
          <span className={styles.disclaimer}>**Disclaimer: The quote value is approximate and subject to change based on the manual troubleshooting performed by our Technician.</span>         
        </div>
        <button className={styles.pdfButton} onClick={printDocument}>Download PDF <MDBIcon far icon="file-pdf" /></button>
      </article>   
  );
};

export default QuotationForm;