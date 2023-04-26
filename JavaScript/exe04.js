/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Augusto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

// array de objetos a ser tratado
const booksByCategory = [
    {
        category: 'Riqueza',
        books: [
            {
                title: 'Os segredos da mente milionária',
                author: 'T. Harv Ekker'
            },
            {
                title: 'O homem mais rico da babilônia',
                author: 'George S. Clason'
            },
            {
                title: 'Pai rico, Pai pobre',
                author: 'Robert T. Kiyosaki e Sharon L. Lechter'
            }
        ]

    },
    {
        category: 'Inteligência Emocional',
        books: [
            {
                title: 'Você é Insubstituível',
                author: 'Augusto Cury'
            },
            {
                title: 'Ansiedade - Como enfrentar o mal do século',
                author: 'Augusto Cury'
            },
            {
                title: 'Os 7 hábitos das pessoas altamente eficazes',
                author: 'Stephen R. Covey'
            }
        ]
    }
]


const totalBooksByCategogry = (booksCategories, author) => {

    //total de categorias dos livros
    const totalCategories = booksCategories.length;
    console.log(`Ao total existem ${totalCategories} categorias de Livros`);
    
    //total de livros por categoria
    for (let book of booksCategories) {
        let category = book.category;
        let totalBooks = book.books.length;
        console.log(`Na categoria '${category}', existem ${totalBooks} livros!`)
    }

    // Total de autores
    let authors = []
    for (let category of booksCategories){
        for (let book of category.books){
            if (authors.includes(book.author)) {

            } else {
                authors.push(book.author)
            }
        }
    }
    console.log(`Existem ${authors.length} autores ao todo!`);

    // Livros de um autor especifico
    if (author) {
        let authorBooks = []
        
        for (let category of booksCategories){
            for (let book of category.books){
                if (book.author.toUpperCase() === author.toUpperCase()){
                    authorBooks.push(book.title)
                }
            }
        }

        console.log(`Os livros de ${author} são: `)
        authorBooks.forEach(element => {
            console.log('   ' + element);
        })
        
    }

}

    
console.log(totalBooksByCategogry(booksByCategory, 'augusto cury'));
