package com.myCoffeeShop.myCoffeeShop.controller;

import com.myCoffeeShop.myCoffeeShop.entity.Product;
import com.myCoffeeShop.myCoffeeShop.entity.Stock;
import com.myCoffeeShop.myCoffeeShop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Clasa unde se implementeaza metodele si rutele pentru clasa Product
 */
@RestController
public class ProductControler {

    @Autowired
    private ProductService productService;

    /**
     * Endpoint-ul pentru functia de adaugare a unui nou produs
     * @param product Un obiect de tip Produs cu proprietatile dorite
     * @return Produsul creat
     */
    @PostMapping("/addProduct")
    public Product addProduct(@RequestBody Product product){
        return productService.saveProduct(product);
    }

    /**
     * Endpoint-ul pentru functia de adaugare a mai multor produse
     * @param products O lista de obiecte de tip Produs cu proprietatile dorite
     * @return  O lista de obiecte de tip Produs cu proprietatile dorite
     */
    @PostMapping("/addProducts")
    public List<Product> addProducts(@RequestBody List<Product> products){
        return productService.saveProducts(products);
    }

    /**
     * Endpoint-ul catre functai de afisare a tuturor produselor
     * @return O lista cu toate produsele existente
     */
    @GetMapping("/products")
    public List<Product> findAllProducts() {
        return productService.getProducts();
    }

    /**
     * Endpoint-ul pentru identificarea unui produs in functie de id
     * @param id id-ul pe care il are produsul dorit
     * @return Produsul care are id-ul dorit
     */
    @GetMapping("/productById/{id}")
    public Product findProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    /**
     * Endpoint-ul pentru identificarea unui produs in functie de numele sau
     * @param name numele pe care il are produsul pe care il dorim
     * @return Produsul care are numele dorit
     */
    @GetMapping("/productByName/{name}")
    public Product findProductByName(@PathVariable String name) {
        return productService.getProductByName(name);
    }

    /**
     * Endpoint-ul catre functia care modifica un produs dorit
     * @param product Produsul cu acelasi id cu produsul pe care dorim sa il modificam si cu modificarile dorite
     * @return Produsul dupa modificarile dorite
     */
    @PutMapping("/product/update")
    public Product updateProduct(@RequestBody Product product){
        return productService.updateProduct(product);
    }

    /**
     * Endpoint-ul pentru a sterge un produs in functie de id-ul sau
     * @param id id-ul produsului pe care dorim sa il stergem
     */
    @DeleteMapping("/product/delete/{id}")
    public void deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
    }

    /**
     * Endpoint-ul pentru sortarea produselor in functie de pretul lor
     * @return Lista de produse sortate in functie de pret-ul lor
     */
    @GetMapping("/product/sortPrice")
    public List<Product> getSortedByPrice() {
        return productService.getSortPrice();
    }

    /**
     * Endpoint-ul pentru sortarea produselor in functie de numele lor
     * @return Lista de produse sortate in functie de numele lor
     */
    @GetMapping("/product/sortName")
    public List<Product> getSortedByName() {
        return productService.getSortName();
    }
}
