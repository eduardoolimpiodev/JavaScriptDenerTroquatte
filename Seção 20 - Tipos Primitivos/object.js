/* 
Object : Tenis (Propriedade) "cadarço", "palmilha"
Object : Celular (Propriedade)
Object : Drone (Propriedade)

Propriedades / Atributos / Funcionalidades

*/

console.log(
    {
        tenis: [
            {
                preco: 150,
                disponibilidade:false,
                estoque: 150,
                cardaco: {
                    cor: 'branco',
                    tamanho: 'G',
                },
                palmilha: {
                    tamanho: 42,
                    cor: 'branca',
                }
            },
            {
                preco: 30,
                disponibilidade:true,
                estoque: 5,
                cardaco: {
                    cor: 'branco',
                    tamanho: 'G',
                },
                palmilha: {
                    tamanho: 42,
                    cor: 'branca',
                }
            }
        ]
    });

console.log([
    {
        tenis: {
            preco: 150,
            disponibilidade:false,
            estoque: 150,
            cardaco: {
                cor: 'branco',
                tamanho: 'G',
            },
            palmilha: {
                tamanho: 42,
                cor: 'branca',
            }
        },
    },
    {
        celular: {
            marca: 'Motorola',
        }
    }
])