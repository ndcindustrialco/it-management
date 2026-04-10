/**
 * Reusable Excel Export Utility using exceljs and file-saver
 */
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

export async function exportToExcel(data: any[], filename: string, sheetName: string = "Sheet1") {
  if (data.length === 0) {
    console.warn("No data provided for export.");
    return;
  }

  try {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(sheetName);

    // Get headers from the first object
    const headers = Object.keys(data[0]);

    // Define columns
    worksheet.columns = headers.map(header => ({
      header: header,
      key: header,
      width: 25 // Default width
    }));

    // Add data rows
    worksheet.addRows(data);

    // Style the header row
    const headerRow = worksheet.getRow(1);
    headerRow.eachCell((cell) => {
      cell.font = { bold: true, color: { argb: "FFFFFFFF" } };
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "FF0F1059" } // Primary theme color
      };
      cell.alignment = { vertical: "middle", horizontal: "center" };
    });

    // Auto-fit column widths based on content
    worksheet.columns.forEach(column => {
        let maxLen = 0;
        if (column.header) maxLen = column.header.toString().length;
        
        // Check content in each row of this column
        worksheet.getColumn(column.key!).eachCell({ includeEmpty: true }, (cell) => {
            const cellLen = cell.value ? cell.value.toString().length : 0;
            if (cellLen > maxLen) maxLen = cellLen;
        });
        column.width = Math.min(Math.max(maxLen + 5, 15), 50); // Min 15, Max 50
    });

    // Write buffer and save
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(blob, `${filename}.xlsx`);

  } catch (error) {
    console.error("Export error with exceljs:", error);
    // Generic fallback if exceljs fails (though it shouldn't if installed correctly)
    throw error;
  }
}

export function exportToCSV(data: any[], filename: string) {
  if (data.length === 0) return;
  
  const headers = Object.keys(data[0]);
  const csvContent = [
    headers.join(","),
    ...data.map(row => 
      headers.map(header => {
        let cell = row[header] === null || row[header] === undefined ? "" : String(row[header]);
        // Escape quotes and wrap in quotes if contains comma
        cell = cell.replace(/"/g, '""');
        if (cell.includes(",") || cell.includes("\n") || cell.includes('"')) {
          cell = `"${cell}"`;
        }
        return cell;
      }).join(",")
    )
  ].join("\n");
  
  // Add BOM for Excel UTF-8 support
  const blob = new Blob(["\uFEFF" + csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  
  link.setAttribute("href", url);
  link.setAttribute("download", `${filename}.csv`);
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
