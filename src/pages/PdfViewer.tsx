import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface PdfViewerProps {
    fileUrl: string;
}

const PdfViewer: React.FC<{ fileUrl: string }> = ({ fileUrl }) => {
    const workerUrl = '/assets/pdfjs/pdf.worker.min.js'; // Ensure this is the correct file

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div style={{ height: '100vh' }}>
            <Worker workerUrl={workerUrl}>
                <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
            </Worker>
        </div>
    );
};

export default PdfViewer;
