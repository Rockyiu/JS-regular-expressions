const texto = `Texto de exemplo para as expressões regulares:
Exemplo para ver o funcionamento das expressões regulares,
teste de exemplo, como funciona as expressões;
Exeeeemppppppppplllllllllooooooooooo
`

const arquivos = [
    'Imagem.jpg',
    'teste;.jpeg',
    'carro.png',
    'casa.JPEG',
    'moto.PNG',
    'lapis.JPG'
]

const html = '<p>Olá mundo</p> <p>Olá de novo</p>';

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz &*°²! 0123456789';
const cpfs = `
    Os CPFs são:
    254.224.877-45 215.978.456-12 047.258.369-96 
    963.987.321-00

    963.987.32a.00 (NÃO VÁLIDO)
    963.987.32-00 (NÃO VÁLIDO)
`;

const ips = `

Os Ips são:
   0.0.0.0

   192.168.0.25

        10.10.5.12

        10.01.10.20 (ESTE IP NÃO É VÁLIDO)
        10.021.08.20 (ESTE IP NÃO É VÁLIDO)

   255.255.255.255

`;

const cpfs2 = `254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00`;

const html2 = `<p 
data-teste='teste' 
class="teste teste">
  Olá mundo
</p> <p>Olá mundo</p> <div>Sou a div</div>`;

const lookahead = `
ONLINE  192.168.0.1 ABCDEF inactive
OFFLINE  192.168.0.2 ABCDEF active
ONLINE  192.168.0.3 ABCDEF active
ONLINE  192.168.0.4 ABCDEF active
OFFLINE  192.168.0.5 ABCDEF active
OFFLINE  192.168.0.6 ABCDEF inactive
`;

module.exports = {
    texto,
    arquivos,
    html,
    alfabeto,
    cpfs,
    ips,
    cpfs2,
    html2,
    lookahead
}