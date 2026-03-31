import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";

/**
 * Utility to generate and download a PDF document using @react-pdf/renderer
 */
export async function downloadPDF(document: any, filename: string) {
  try {
    const blob = await pdf(document).toBlob();
    saveAs(blob, `${filename}.pdf`);
  } catch (error) {
    console.error("PDF generation error with @react-pdf/renderer:", error);
  }
}

/**
 * Utility to generate and open a PDF document in a new tab for preview
 */
export async function previewPDF(document: any) {
  try {
    const blob = await pdf(document).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, "_blank");
  } catch (error) {
    console.error("PDF preview error with @react-pdf/renderer:", error);
  }
}
