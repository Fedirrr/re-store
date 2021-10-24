export default class BookstoreService {
    data = [
        {
            id: 1,
            title: 'Production-Ready Microservices',
            author: 'Susan J. Fowler',
            price: 32,
            bookImg: 'https://images-na.ssl-images-amazon.com/images/I/81D4AHNvMsL.jpg',
        },
        {
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price: 20,
            bookImg: 'https://kupichitay.com.ua/wp-content/uploads/2020/03/u_files_store_3_694640.jpg',
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