const path = require('path')
const fs = require('fs')
const os = require('os')


// //questao 2:
// // Crie um programa que após receber o caminho
// // execute as seguintes ações:
// // Extraia o nome do diretório e exiba no console;
// // Extraia a extensão do caminho e exiba no console;
// // A partir do caminho relativo “/planodecurso.pdf”, obtenha o caminho
// // absoluto e exiba no console.
// // Por fim, crie um objeto contendo os segmentos que
// // compõem o caminho fornecido.

const caminho = 'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf'
const caminhoRelativo = '/planodecurso.pdf'
console.log(`Nome do diretorio: `, path.dirname(caminho) ,`extensão do caminho: `,path.extname(caminho))

if(caminhoRelativo === '/planodecurso.pdf'){
    console.log(caminho)
}

const info = [
    {
      root: '',
      dir:'https://al.senai.br/cursos/tecnico-em-informatica-para-internet/planodecurso.pdf',
      base:'planodecurso.pdf',
      ext:'.pdf',
      name:'planodecurso'
    }
]

// //questao 3:
// //Crie um programa que construa uma Url baseada no objeto da imagem
// //abaixo e exiba no console.
// //Ao finalizar a construção da url, através de um objeto você deverá extrair todas
// //as informações dos parâmetros que a compõem e exibir no console 

const url = {
protocol: 'https:',
slashes:true,
auth: null,
host:'nodejs.org',
port:null,
hostname:'nodejs.org',
hash:'#url_new_url_input_base',
search:null,
query: '[Object: null prototype] {}',
pathname:'/api/url.html',
path:'/api/url.html',
href:'https://nodejs.org/api/url.html#url_new_url_input_base'

}

console.log(`- Protocolo: `,url.protocol,` - hostname: `,url.hostname,`- Pathname: `,url.pathname,`- hash: `,url.hash,
 `- path: ` ,url.path, `- auth: `, url.auth, `- port: ` , url.port, `- slashes: `, url.slashes, `- query: ` ,url.query)



// //questao 4:
// //Crie um programa utilizando o core module File System, 
// //que faça com que o arquivo seja renomeado.

fs.rename('arquivoVelho.txt', 'renomeeiArquivo.txt', (err)=>{
if (err)throw(err)
console.log('Arquivo renomeado!!')
})


// //questao 5:
// //Crie um programa utilizando o core module OS, que retorne 
// //as informações contidas sobre cada núcleo lógico da CPU, como
// //representado na imagem abaixo

console.log(`informações do núcleo lógico CPU: `,os.cpus())