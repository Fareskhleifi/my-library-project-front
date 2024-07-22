
export default function Card() {
    
    const products = [
        {
            id: 1,
            name: 'The Night Circus',
            href: '#',
            imageSrc: '../src/assets/books/book8.jpg',
            imageAlt: "Front  of men's Basic Tee in black.",
            price: '$5',
            color: 'Fantasy',
          },
        
          {
            id: 2,
            name: 'Educated',
            href: '#',
            imageSrc: '../src/assets/books/book1.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$5',
            color: 'Memoir',
          },
        
          {
            id: 3,
            name: 'Where the Crawdads Sing',
            href: '#',
            imageSrc: '../src/assets/books/book2.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$5',
            color: 'Mystery/Drama',
          },
        
          {
            id: 4,
            name: 'The Silent Patient',
            href: '#',
            imageSrc: '../src/assets/books/book3.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$5',
            color: 'Psychological Thriller',
          },
        
          {
            id: 5,
            name: 'Becoming',
            href: '#',
            imageSrc: '../src/assets/books/book4.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$5',
            color: 'Autobiography',
          },
        
          {
            id: 6,
            name: 'The Testaments',
            href: '#',
            imageSrc: "../src/assets/books/book5.jpg",
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$5',
            color: ' Dystopian Fiction',
          },
        
          {
            id: 7,
            name: 'The Alchemist"',
            href: '#',
            imageSrc: '../src/assets/books/book6.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$5',
            color: 'Fiction/Philosophy',
          },
        
          {
            id: 8,
            name: 'Harry potter',
            href: '#',
            imageSrc: '../src/assets/books/book7.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$5',
            color: 'Fantasy',
          },
          
          
        
        // More products...
      ]
      //mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8
  return (
    <>
      <div className="bg-white relative" >
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-5xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true"  className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}