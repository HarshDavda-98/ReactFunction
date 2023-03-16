
import React from 'react'
import DragAndDrop from './dragDropContent';
import EmailContent from './emailContent';
import DownloadContent from './download';
import GoogleMap from './googlemap';
import PaymentGateWays from './paymentGateways';
import SignatureCanvas from './signatureCanvas';
import UpiIntegration from './upiIntegration';


import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
export default function Routers() {

  const pageComponent = [<GoogleMap />, <SignatureCanvas />, <EmailContent />, <PaymentGateWays />,  <DownloadContent />, <UpiIntegration />, <DragAndDrop />]
  const pageLink = ["/googlemap", "/signature-canvas", "/Email-functionality", "/payment-integration", "/downloadfiles", "/upi-integration", "/drag-and-drop"];

  return (
    <div>
    </div>
  )
}