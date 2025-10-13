// src/routes/Resume.tsx
import React from "react";
import resumePdf from "../assets/cv_sep25.pdf";

const Resume: React.FC = () => {
  const pdfPath = resumePdf;

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-extrabold mb-6">My Resume</h1>

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-300">{' '}</div>
          <a
            href={pdfPath}
            download="My_Resume.pdf"
            className="text-sm text-sky-600 hover:text-sky-700"
            aria-label="Download resume as PDF"
          >
            Download
          </a>
        </div>

        <div className="w-full">
          <iframe
            src={`${pdfPath}#view=FitH`}
            title="Resume preview"
            className="w-full h-[800px] md:h-[900px] border-0"
            aria-label="Resume PDF preview"
          >
            <div className="p-6 text-center">
              <p className="mb-4">Your browser does not support embedded PDFs.</p>
              <a
                href={pdfPath}
                download="My_Resume.pdf"
                className="inline-block px-4 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700"
              >
                Download Resume
              </a>
            </div>
          </iframe>
        </div>
      </div>
    </section>
  );
};

export default Resume;
