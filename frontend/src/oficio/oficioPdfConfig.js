import { logoSspds } from './imagesBase64'
import domtoimage from 'dom-to-image'


function formatNumero(number) {
    const length = number.length
    switch (length) {
        case 1:
            return '000' + number
        case 2:
            return '00' + number
        case 3:
            return '0' + number
        default:
            return number

    }

}

function html2Image(html){
    const temp = document.createElement("div")
    temp.innerHTML = html
    const retorno = domtoimage.toPng(temp).then((dataUrl) => dataUrl)
    return retorno

   
    
    
}

function formatDate(date) {
    const data = new Date(date)
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        
    }

    return data.toLocaleDateString('pt-BR', options)
}
function formatDateYear(date) {
    const data = new Date(date)
    const options = {
        year: 'numeric',
       
        
    }

    return data.toLocaleDateString('pt-BR', options)
}

function html2Text(html) {
    const temp = document.createElement("div")
    temp.innerHTML = html
    console.log('text: '+temp.innerText)
    return temp.textContent || temp.innerText || ""
}

export function docDefinition(oficio) { 
 
    

    return Object({
    pageOrientation: 'portrait',
    pageSize: 'A4',
    pageMargins: [55, 30, 25, 40],
    //header: 'simple text',

    footer: function (currentPage, pageCount) {
        return {
            text: 'Página ' + currentPage.toString() + ' de ' + pageCount,
            alignment: 'right',
            margin: [0, 0, 30, 0],
            fontSize: 9,
        }
    },

    content: [


        
        //{ text: 'This is a header', style: 'header' },
        //'No styling here, this is a standard paragraph',
        // { text: 'Another text', style: 'anotherStyle' },
        // { text: 'Multiple styles applied', style: ['header', 'anotherStyle'] },
        {
            image: logoSspds,
            width: 260,
            height: 130,
        },
               
        { 
            text: 'Ofício n°: '+formatNumero(oficio.numero+"")+'/'+formatDateYear(oficio.data)+" - Ajd. Sec. CBPChoque/CPE.", 
            margin: [10,0,0,0],
            bold: true,
            fontSize: 12
        },
        { 
            text: [{text:'Assunto: ', bold: true},{text: oficio.assunto+'.', bold: false}], 
            margin: [10,0,0,0],
            bold: true,
            fontSize: 12
        },
        { 
            text: [{text:'Referência: ', bold: true},{text: oficio.referencia+'.', bold: false}], 
            margin: [10,0,0,0],            
            fontSize: 12
        },
        { 
            text: 'Fortaleza-CE, '+formatDate(oficio.data), 
            margin: [10,25,0,0],
            bold: true,
            fontSize: 12
        },
        { 
            text: oficio.destino, 
            margin: [10,25,0,0],
            fontSize: 12
        },
        { 
            text: html2Text(oficio.conteudo), 
            
        },
    ],

    styles: {
        header: {
            fontSize: 12,
            bold: true,
            alignment: 'center'

        },
        anotherStyle: {
            italics: true,
            alignment: 'right'
        },
        table: {
            fontSize: 7.5,
            alignment: 'center',


        },
    }

})
}