
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import components for router
import DragAndDrop from './dragDropContent';
import EmailContent from './emailContent';
import DownloadContent from './download';
import GoogleMap from './googlemap';
import PaymentGateWays from './paymentGateways';
import SignatureCanvas from './signatureCanvas';
import UpiIntegration from './upiIntegration';
import PageNotFound from './pageNotFound';
import Overview from './Overview';
export default function Routers() {

  const pageComponent = [ <Overview/>,<Overview/>, <GoogleMap/>, <SignatureCanvas/>, <EmailContent/>, <PaymentGateWays/>, <DownloadContent/>, <UpiIntegration/>, <DragAndDrop />, <PageNotFound/>]
  const pageLink = ["/","/overview","/googlemap", "/signature-canvas", "/Email-functionality", "/payment-integration", "/downloadfiles", "/upi-integration", "/drag-and-drop","*"];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          {pageComponent?.map((list,i) => {
            if(i=== 0){
            return <Route exact path={pageLink[i]} element={list}></Route>
          } else{
            return <Route path={pageLink[i]} element={list}></Route>
          }})}
        </Routes>
      </BrowserRouter>

    </div>
  )
}