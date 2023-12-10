const url = '../algae_zine/algae_zine.pdf';

let pdfDoc = null,
    pagenum = 1,
    pageIsRendering = false,
    pageNumIsPending = null;

const scale = 1.5,
    canva = document.querySelector('#pdf-render'),
    ctx = canvas.getContext('2d');

// render page
const renderPage = num => {
};

// get doc
pdfjsLib.getDocument(url).promise.then(pdfDoc => {
    pdfDoc = pdfDoc_;
    console.log(pdfDoc);
});