
'use client';

import { useMemo, useRef, useState } from 'react';

export default function Guide(){
  const [name,setName] = useState("Your Broker Name");

  const exportPDF = () => {
    document.title = "Home-Buyer-Guide-" + name.replace(/\s+/g,'-');
    window.print();
  };

  const openWebPreview = () => {
    const win = window.open("", "_blank");
    if(win){
      win.document.write("<h1 style='font-family:sans-serif'>First-Time Home Buyer Guide</h1><p>This is the preview version.</p>");
      win.document.close();
    }
  };

  const downloadHTML = () => {
    const html = `<!doctype html><html><head><meta charset='utf-8'><title>Guide</title></head><body><h1>First-Time Home Buyer Guide</h1></body></html>`;
    const blob = new Blob([html],{type:'text/html'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "home-buyer-guide.html";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{fontFamily:"sans-serif",padding:40}}>
      <h1>Home Buyer Guide Builder</h1>
      <input value={name} onChange={(e)=>setName(e.target.value)} style={{padding:8}} />
      <div style={{marginTop:20,display:"flex",gap:10}}>
        <button onClick={exportPDF}>Download PDF</button>
        <button onClick={openWebPreview}>Open Web Version</button>
        <button onClick={downloadHTML}>Download Web HTML</button>
      </div>
    </div>
  );
}
