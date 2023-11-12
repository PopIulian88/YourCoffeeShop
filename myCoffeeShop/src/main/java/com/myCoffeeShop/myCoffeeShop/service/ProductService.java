package com.myCoffeeShop.myCoffeeShop.service;

import com.myCoffeeShop.myCoffeeShop.entity.Product;
import com.myCoffeeShop.myCoffeeShop.entity.Stock;
import com.myCoffeeShop.myCoffeeShop.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Clasa care se ocupa cu  implementarea metodelor pentru Clasa Product
 */
@Service
public class ProductService {
    @Autowired
    private ProductRepository productRepository;

    /**
     * Creaza un produs
     * @param product Produsul care are poramentrii pe care dorim sa ii adaugam
     * @return Produsul creat
     */
    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }


    /**
     * Creaza mai multe produse
     * @param products Lista de produse pe care dorim sa o cream
     * @return Lista cu produsele create
     */
    public List<Product> saveProducts(List<Product> products) {
        return productRepository.saveAll(products);
    }

    /**
     * Arata produsele care exista
     * @return Lista cu produsele care exista
     */
    public List<Product> getProducts() {
        return productRepository.findAll();
    }

    /**
     * Arata produsul in functie de id
     * @param id id-ul pe care il are produsul pe care dorim
     * @return Produsul in functie de id-ul sau
     */
    public Product getProductById(Long id){
        return productRepository.findById(id).orElse(null);
    }

    /**
     * Arata produsul in functie de numele lui
     * @param name Numele pe care il are produsul dorit
     * @return Produsul dorit in functie de numele lui
     */
    public Product getProductByName(String name){
        return productRepository.findByName(name);
    }

    /**
     * Afiseaza taote produsele in functie de stock-ul lor
     * @param stock Stock-ul dorit
     * @return Lista cu produsele care contin stock-ul
     */
    public List<Product> findAllProductsByStock(Stock stock){
        return productRepository.findAllByIncredients(stock);
    }

    /**
     * Sterge un produs in functie de id-ul sau
     * @param id id-ul pe care il are produsul pe care dorim sa il stergem
     */
    public void deleteProduct(Long id){
        productRepository.deleteById(id);
    }

    /**
     * Modificam un produs
     * @param product Produsul nou, care obligatoriu are id-ul produsului pe care dormi sa il modificam
     * @return Produsul dupa modificare
     */
    public Product updateProduct(Product product){
        Product existingProduct = productRepository.findById(product.getId()).orElse(null);
        existingProduct.setName(product.getName());
        existingProduct.setDescription(product.getDescription());
        existingProduct.setPrice(product.getPrice());
        existingProduct.setIncredients(product.getIncredients());
        existingProduct.setIncredients_quantiti(product.getIncredients_quantiti());
        existingProduct.setPhotoLink(product.getPhotoLink());

        return productRepository.save(existingProduct);
    }

    /**
     * Storteaza produsele in functie de pret
     * @return O lista de produse sortate dupa pretul lor
     */
    public List<Product> getSortPrice() {
        return productRepository.findAllByOrderByPrice();
    }

    /**
     * Sorteaza prdusele in functie de nume
     * @return List de produse sortata dupa nume
     */
    public List<Product> getSortName() {
        return productRepository.findAllByOrderByName();
    }
}
