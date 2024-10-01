export default class BookstoreService {
    data = [
        {
            id: 1,
            title: "Clean Code: A Handbook of Agile Software Craftsmanship",
            author: "Robert C. Martin",
            price: 35,
            bookImg: "https://m.media-amazon.com/images/I/51E2055ZGUL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            id: 2,
            title: "JavaScript: The Good Parts",
            author: "Douglas Crockford",
            price: 25,
            bookImg: "https://m.media-amazon.com/images/I/7185IMvz88L._AC_UF894,1000_QL80_.jpg",
        },
        {
            id: 3,
            title: "You Don’t Know JS: Scope & Closures",
            author: "Kyle Simpson",
            price: 20,
            bookImg: "https://m.media-amazon.com/images/I/81zWsOMWE4L._AC_UF1000,1000_QL80_.jpg",
        },
        {
            id: 4,
            title: "The Pragmatic Programmer: Your Journey To Mastery",
            author: "Andrew Hunt, David Thomas",
            price: 40,
            bookImg: "https://m.media-amazon.com/images/I/71f1jieYHNL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            id: 5,
            title: "Design Patterns: Elements of Reusable Object-Oriented Software",
            author: "Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides",
            price: 45,
            bookImg: "https://m.media-amazon.com/images/I/81YsHe4woRL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            id: 6,
            title: "The Mythical Man-Month: Essays on Software Engineering",
            author: "Frederick P. Brooks Jr.",
            price: 30,
            bookImg: "https://images-na.ssl-images-amazon.com/images/I/81B5AqU-UsL.jpg",
        },
        {
            id: 7,
            title: "Production-Ready Microservices",
            author: "Susan J. Fowler",
            price: 32,
            bookImg: "https://images-na.ssl-images-amazon.com/images/I/81D4AHNvMsL.jpg",
        },
        {
            id: 8,
            title: "Release It!",
            author: "Michael T. Nygard",
            price: 20,
            bookImg: "https://kupichitay.com.ua/wp-content/uploads/2020/03/u_files_store_3_694640.jpg",
        }
    ];

    getBooks() {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve(this.data)
            },700)
        })
    }
}
