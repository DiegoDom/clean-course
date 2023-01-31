;(() => {
  interface Product {
    id: number
    name: string
  }

  class ProductService {
    getProduct(id: number) {
      //* Realiza un proceso para obtener el producto y retornarlo
      console.log('Producto: ', { id, name: 'OLED Tv' })
    }

    saveProduct(product: Product) {
      //* Realiza una petición para salvar en base de datos
      console.log('Guardando en base de datos', product)
    }
  }

  class Mailer {
    private sender: string = 'test@dummy.com'

    sendEmail(emailList: string[]) {
      //* Realiza un proceso para enviar el email a cada correo
      console.log('Enviando correo a los clientes', emailList, this.sender)
    }
  }

  //* Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
  //* Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
  class ProductBloc {
    constructor(
      private readonly mailer: Mailer,
      private readonly productService: ProductService,
    ) {}

    loadProduct(id: number) {
      this.productService.getProduct(id)
    }

    saveProduct(product: Product) {
      this.productService.saveProduct(product)
    }

    notifyClients() {
      this.mailer.sendEmail(['john@dummy.com'])
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = []

    addToCart(productId: number) {
      //* Agregar al carrito de compras
      console.log('Agregando al carrito ', productId)
    }
  }

  const productService = new ProductService()
  const mailer = new Mailer()

  const productBloc = new ProductBloc(mailer, productService)
  const cartBloc = new CartBloc()

  productBloc.loadProduct(10)
  productBloc.saveProduct({ id: 10, name: 'OLED TV' })
  productBloc.notifyClients()
  cartBloc.addToCart(10)
})()
