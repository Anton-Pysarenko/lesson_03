var LibraryBook = function (title, year, author) {
    var titlePR = title
    var yearPR = year
    var authorPR = author
    var readerName = null
    var readerData = null

    function giveTheBook (client, data = new Date() ) {
        readerName = client
        readerData = data
    }

    this.getBookInfo = function () {
                var text = readerName ? "выдана" : "есть в наличии"
                console.info ( `${authorPR}, ${titlePR} (${yearPR}): ${text}` )
        }
        
    this.getTheBook = function ( client, data ) {
                if ( readerName ) {
                        this.getBookInfo ()
                        return null
                } else {
                        giveTheBook ( client, data )
                        return {
                                titlePR: titlePR,
                                yearPR: yearPR,
                                authorPR: authorPR
                        }
                }
        }

     this.returnBook = function () {
                readerName = null
                readerData = null
        }
}

var books = []
books [0] = new LibraryBook ( "Война и мир", "1995", "Лев Толстой" )
books [1] = new LibraryBook ( "Отцы и дети", "1998", "Тургенев" )
books [3] = new LibraryBook ( "Кобзарь", "2005", "Тарас Шевченко" )

console.log ( books )

books [0].getBookInfo()
books [0].getTheBook( "Иван Сидоренко", new Date ( 2018, 6, 25 ) )
books [0].getBookInfo()
books [0].returnBook()
books [0].getBookInfo()