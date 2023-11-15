package com.myCoffeeShop.myCoffeeShop.service;

import com.myCoffeeShop.myCoffeeShop.entity.Product;
import com.myCoffeeShop.myCoffeeShop.entity.Stock;
import com.myCoffeeShop.myCoffeeShop.repository.ProductRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;



@SpringBootTest
class ProductServiceTest {

    @Mock
    private ProductRepository productRepository;

    @InjectMocks
    private ProductService productService;

    @Test
    void saveProduct() {
        // Crează un obiect Product pentru a fi salvat
        Product product = new Product();

        // Simulează comportamentul salvării în baza de date
        Mockito.when(productRepository.save(Mockito.any(Product.class))).thenReturn(product);

        // Salvează produsul folosind metoda din serviciu
        Product savedProduct = productService.saveProduct(product);

        // Verifică că metoda de salvare a fost apelată
        Mockito.verify(productRepository, Mockito.times(1)).save(Mockito.any(Product.class));

        // Verifică dacă produsul salvat este același cu cel introdus
        Assertions.assertEquals(product, savedProduct);
    }

    @Test
    void saveProducts() {
        // Crează o listă de obiecte Product pentru a fi salvate
        List<Product> products = Arrays.asList(new Product(), new Product(), new Product());

        // Simulează comportamentul salvării în baza de date
        Mockito.when(productRepository.saveAll(Mockito.anyIterable())).thenReturn(products);

        // Salvează lista de produse folosind metoda din serviciu
        List<Product> savedProducts = productService.saveProducts(products);

        // Verifică că metoda de salvare a fost apelată
        Mockito.verify(productRepository, Mockito.times(1)).saveAll(Mockito.anyIterable());

        // Verifică dacă lista de produse salvate este aceeași cu cea introdusă
        Assertions.assertEquals(products, savedProducts);
    }

    @Test
    void getProducts() {
        // Crează o listă de obiecte Product pentru a simula datele din baza de date
        List<Product> mockProducts = Arrays.asList(new Product(), new Product(), new Product());

        // Simulează comportamentul metodei findAll a repository-ului pentru a returna lista simulată
        Mockito.when(productRepository.findAll()).thenReturn(mockProducts);

        // Obține lista de produse folosind metoda din serviciu
        List<Product> retrievedProducts = productService.getProducts();

        // Verifică că metoda findAll a fost apelată
        Mockito.verify(productRepository, Mockito.times(1)).findAll();

        // Verifică dacă lista de produse returnată de serviciu este aceeași cu cea simulată
        Assertions.assertEquals(mockProducts, retrievedProducts);
    }

    @Test
    void getProductById() {

        // ID-ul de produs simulat
        Long productId = 1L;

        // Obiect Product simulat
        Product mockProduct = new Product();
        mockProduct.setId(productId);

        // Simulează comportamentul metodei findById a repository-ului pentru a returna produsul simulat
        Mockito.when(productRepository.findById(productId)).thenReturn(Optional.of(mockProduct));

        // Obține produsul folosind metoda din serviciu
        Product retrievedProduct = productService.getProductById(productId);

        // Verifică că metoda findById a fost apelată
        Mockito.verify(productRepository, Mockito.times(1)).findById(productId);

        // Verifică dacă produsul returnat de serviciu este același cu cel simulat
        Assertions.assertEquals(mockProduct, retrievedProduct);
    }

    @Test
    void getProductByName() {
        // Numele de produs simulat
        String productName = "Coffee";

        // Obiect Product simulat
        Product mockProduct = new Product();

        // Simulează comportamentul metodei findByName a repository-ului pentru a returna produsul simulat
        Mockito.when(productRepository.findByName(productName)).thenReturn(mockProduct);

        // Obține produsul folosind metoda din serviciu
        Product retrievedProduct = productService.getProductByName(productName);

        // Verifică că metoda findByName a fost apelată
        Mockito.verify(productRepository, Mockito.times(1)).findByName(productName);

        // Verifică dacă produsul returnat de serviciu este același cu cel simulat
        Assertions.assertEquals(mockProduct, retrievedProduct);
    }

    @Test
    void findAllProductsByStock() {
        // Simulează un obiect de tip Stock
        Stock mockStock = new Stock();

        // Lista de produse simulate
        List<Product> mockProducts = Arrays.asList(new Product(), new Product(), new Product());

        // Simulează comportamentul metodei findAllByIngredients a repository-ului pentru a returna lista simulată
        Mockito.when(productRepository.findAllByIncredients(mockStock)).thenReturn(mockProducts);

        // Obține lista de produse folosind metoda din serviciu
        List<Product> retrievedProducts = productService.findAllProductsByStock(mockStock);

        // Verifică că metoda findAllByIncredients a fost apelată
        Mockito.verify(productRepository, Mockito.times(1)).findAllByIncredients(mockStock);

        // Verifică dacă lista de produse returnată de serviciu este aceeași cu cea simulată
        Assertions.assertEquals(mockProducts, retrievedProducts);
    }

    @Test
    void deleteProduct() {
        // ID-ul de produs simulat
        Long productId = 1L;

        // Apelul metodei deleteById a repository-ului pentru a șterge produsul simulat
        productService.deleteProduct(productId);

        // Verifică că metoda deleteById a fost apelată cu ID-ul corect
        Mockito.verify(productRepository, Mockito.times(1)).deleteById(productId);
    }

    @Test
    void updateProduct() {
        // Obiect Product simulat
        Product mockProduct = new Product();
        mockProduct.setId(5L);

        // Simulează comportamentul metodei findById a repository-ului pentru a returna produsul simulat
        Mockito.when(productRepository.findById(mockProduct.getId())).thenReturn(Optional.of(mockProduct));

        // Simulează comportamentul metodei save a repository-ului pentru a returna produsul simulat actualizat
        Mockito.when(productRepository.save(Mockito.any(Product.class))).thenReturn(mockProduct);

        // Apelul metodei updateProduct pentru a actualiza produsul simulat
        Product updatedProduct = productService.updateProduct(mockProduct);

        // Verifică că metoda findById a fost apelată cu ID-ul corect
        Mockito.verify(productRepository, Mockito.times(1)).findById(mockProduct.getId());

        // Verifică că metoda save a fost apelată cu produsul simulat actualizat
        Mockito.verify(productRepository, Mockito.times(1)).save(Mockito.any(Product.class));

        // Verifică dacă produsul returnat de serviciu este același cu cel simulat actualizat
        Assertions.assertEquals(mockProduct, updatedProduct);
    }

    @Test
    void getSortPrice() {
        // Lista de produse simulate
        List<Product> mockProducts = Arrays.asList(new Product(), new Product(), new Product());

        // Simulează comportamentul metodei findAllByOrderByPrice a repository-ului pentru a returna lista simulată
        Mockito.when(productRepository.findAllByOrderByPrice()).thenReturn(mockProducts);

        // Obține lista de produse sortate folosind metoda din serviciu
        List<Product> sortedProducts = productService.getSortPrice();

        // Verifică că metoda findAllByOrderByPrice a fost apelată
        Mockito.verify(productRepository, Mockito.times(1)).findAllByOrderByPrice();

        // Verifică dacă lista de produse returnată de serviciu este aceeași cu cea simulată
        Assertions.assertEquals(mockProducts, sortedProducts);
    }

    @Test
    void getSortName() {
        // Lista de produse simulate
        List<Product> mockProducts = Arrays.asList(new Product(), new Product(), new Product());

        // Simulează comportamentul metodei findAllByOrderByName a repository-ului pentru a returna lista simulată
        Mockito.when(productRepository.findAllByOrderByName()).thenReturn(mockProducts);

        // Obține lista de produse sortate după nume folosind metoda din serviciu
        List<Product> sortedProducts = productService.getSortName();

        // Verifică că metoda findAllByOrderByName a fost apelată
        Mockito.verify(productRepository, Mockito.times(1)).findAllByOrderByName();

        // Verifică dacă lista de produse returnată de serviciu este aceeași cu cea simulată
        Assertions.assertEquals(mockProducts, sortedProducts);
    }
}