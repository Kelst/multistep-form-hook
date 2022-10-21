import React from 'react';
import ReactJson from 'react-json-view';
import { FormData } from './types';
export default function FinishFields(data:FormData) {
    console.log(JSON.stringify(data));
    
  return (
    
    <div>
    <ReactJson src={data} />

    </div>
  );
}
