class ProductoManager {
  constructor() {
    this. products = []
    this.id = 0
  }

  addProduct = (title, description, price, thumbnail, code, stock) => {
    if (title && description && price && thumbnail && code && stock) {  //Chequeo que esten todos los campos
      if(!this.products.some(product => product.code == code)) {  //Verifico que no se repita el codigo
        const product = {
          title: title,
          description: description,
          price: price,
          thumbnail: thumbnail,
          code: code,
          stock: stock,
          id: this.id
        }
        this.products.push(product)
        this.id++
      } else {
        console.log(`Ya existe un producto con el código ${code}`)
      }
    } else {console.log('Falta un campo')}
  }
  getProducts = () => this.products
  getProductById = (id) => this.products.find(product => product.id == id) ?? 'Not found'
}

const myProductManager = new ProductoManager()
console.log('-----Obtengo array vacío--------------------------------')
console.log(myProductManager.getProducts())
console.log('-----Agrego un producto y obtengo el array--------------')
myProductManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25)
console.log(myProductManager.getProducts())
console.log('-----Agrego un producto con el mismo codigo-------------')
myProductManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 'abc123', 25)
console.log('-----Busco un producto por ID inexistente---------------')
console.log(myProductManager.getProductById(2))
console.log('-----Busco un producto por ID existente-----------------')
console.log(myProductManager.getProductById(0))
console.log('-----Intento agregar un producto con un campo menos-----')
myProductManager.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen', 25)
console.log('--------------------------------------------------------')

