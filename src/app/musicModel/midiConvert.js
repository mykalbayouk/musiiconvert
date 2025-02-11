// 'use client';
// import WebMscore from 'webmscore';

// /**
//  * Inputs a midi file and returns a pdf file
//  * @param {*} src 
//  * @returns 
//  */
// export default function getWeb(src) {
//     if (!src) {
//         return Promise.reject('No file selected');
//     }

//     return new Promise((resolve, reject) => {
//         WebMscore.ready.then(async () => {
//             try {
//                 // creating array buffer
//                 await WebMscore.setLogLevel(2);  // 2 = debug
//                 const arrayBuffer = await src.arrayBuffer();
//                 const uint8Array = new Uint8Array(arrayBuffer);
//                 // using webmscore to convert midi to pdf
//                 const score = await WebMscore.load('midi', uint8Array);
//                 const pdfData = await score.savePdf();
//                 // creating file from pdf data
//                 const blob = new Blob([pdfData], { type: 'application/pdf' });
//                 const file = new File([blob], 'output.pdf', { type: 'application/pdf' });
//                 score.destroy();
//                 resolve(file);
//             } catch (error) {
//                 reject(error);
//             }
//         }).catch(reject);
//     });
// }