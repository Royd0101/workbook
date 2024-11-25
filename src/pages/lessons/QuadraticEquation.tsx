import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './QuadraticEquation.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = '/assets/pdfjs/pdf.worker.mjs';

const QuadraticEquation: React.FC = () => {
    const pdfUrl = '/assets/pdf/QuadraticEquation.pdf';
    const [pageNumber, setPageNumber] = useState(1);
    const [numPages, setNumPages] = useState<number | null>(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    let touchStartX = 0;
    let touchEndX = 0;

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    const onResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const getPageDimensions = () => {
        const aspectRatio = 1.5; // Set this value according to your PDF's aspect ratio
        const width = Math.min(windowWidth * 0.95, 600); // Use 95% of the screen width or a max width of 600px
        const height = width * aspectRatio;
        return { width, height };
    };

    const { width, height } = getPageDimensions();

    // Handle touch start
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX = e.changedTouches[0].screenX;
    };

    // Handle touch end and determine swipe direction
    const handleTouchEnd = (e: React.TouchEvent) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    };

    const handleSwipe = () => {
        // Right swipe (previous page)
        if (touchStartX - touchEndX > 100 && pageNumber < numPages!) {
            setPageNumber(pageNumber + 1);
        }
        // Left swipe (next page)
        if (touchEndX - touchStartX > 100 && pageNumber > 1) {
            setPageNumber(pageNumber - 1);
        }
    };

    return (
        <div className="card">
            <div
                className="pdf-container"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} width={width} height={height} />
                </Document>

                <p className="pdf-info">Page {pageNumber} of {numPages}</p>
            </div>
        </div>
    );
};

export default QuadraticEquation;
