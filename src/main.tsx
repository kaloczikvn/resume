import React from 'react';
import { createRoot } from 'react-dom/client';
import { PDFViewer } from './react-pdf';
import App from './App';
import { Font } from '@react-pdf/renderer';

import './styles.css';

Font.register({
  family: 'Rajdhani',
  fonts: [
    { src: '/fonts/Rajdhani-Regular.ttf' },
    { src: '/fonts/Rajdhani-Light.ttf', fontWeight: 300 },
    { src: '/fonts/Rajdhani-SemiBold.ttf', fontWeight: 600 },
  ],
});

Font.register({
  family: 'OpenSans',
  fonts: [
    { src: '/fonts/OpenSans-Regular.ttf' },
    { src: '/fonts/OpenSans-SemiBold.ttf', fontWeight: 600 },
    { src: '/fonts/OpenSans-Bold.ttf', fontWeight: 700 },
  ],
});

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <PDFViewer className='pdf-viewer'>
      <App />
    </PDFViewer>
  </React.StrictMode>
);
