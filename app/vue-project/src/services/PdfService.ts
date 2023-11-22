// src/services/PdfService.ts
import { PDFDocument, PDFPage, rgb } from 'pdf-lib';
import { Image, loadImage } from 'canvas';

export async function createPdf(images: string[], outputPath: string): Promise<void> {
  try {
    const pdfDoc = await PDFDocument.create();

    for (const imagePath of images) {
      try{
        
        const image = await loadImage(imagePath);
      const [width, height] = [image.width, image.height];

        const page : PDFPage = pdfDoc.addPage([width, height]);
        const imageBytes = imageToUint8Array(image);
        const pdfImage = await pdfDoc.embedPng(imageBytes);
        const { width: pdfWidth, height: pdfHeight } = pdfImage.scale(width);
        page.drawImage(pdfImage, {
          x: 0,
          y: 0,
          width: pdfWidth,
          height: pdfHeight,
        });
      } catch (error){
        console.error("Error processing image:", error)
      }
    }

    const pdfBytes = await pdfDoc.save();

    // Use your preferred method to save or send the PDF (e.g., writeFileSync, send to server, etc.)
    // For example, using fs.promises.writeFile for Node.js
    // import { promises as fsPromises } from 'fs';
    // await fsPromises.writeFile(outputPath, pdfBytes);

    console.log(`PDF created successfully at: ${outputPath}`);
  } catch (error) {
    console.error('Error creating PDF:', error);
    throw error;
  }
}
async function imageToUint8Array(image: HTMLImageElement): Promise<Uint8Array> {
  const canvas = new OffscreenCanvas(image.width, image.height);
  const context = canvas.getContext('2d');
  context.drawImage(image, 0, 0);
  const imageData = context.getImageData(0, 0, image.width, image.height);
  return new Uint8Array(imageData.data.buffer);
}

