package com.myCoffeeShop.myCoffeeShop.service;

import com.myCoffeeShop.myCoffeeShop.entity.Product;
import com.myCoffeeShop.myCoffeeShop.entity.Stock;
import com.myCoffeeShop.myCoffeeShop.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Clasa care se ocupa cu  implementarea metodelor pentru Clasa Stock
 */
@Service
public class StockService {
    @Autowired
    private StockRepository stockRepository;

    @Autowired
    private ProductService productService;

    /**
     * Creaza un stock nou
     * @param stock Stock-ul cu atributele pe care dormi sa le aiba
     * @return Stock-ul creat
     */
    public Stock saveStock(Stock stock) {
        return stockRepository.save(stock);
    }

    /**
     * Salveaza mai multe stock-uri in acelasi timp
     * @param stocks O lista de stock-uri cu atributele dorite
     * @return Lista de stock-uri create
     */
    public List<Stock> saveStocks(List<Stock> stocks) {
        return stockRepository.saveAll(stocks);
    }

    /**
     * Afiseaza toate stock-urile existente
     * @return Lista de stock-uri existente
     */
    public List<Stock> getStocks() {
        return stockRepository.findAll();
    }

    /**
     * Afiseaza un stock existent in funcite de id-ul lui
     * @param id Id-ul stock-ului dorit
     * @return Stock-ulpe care ni-l dorim in functie de id
     */
    public Stock getStockById(Long id){
        return stockRepository.findById(id).orElse(null);
    }

    /**
     * Afiseaza un stock in functie de numele sau
     * @param name Numele in functie de care cautam stock-ul
     * @return Stock-ul gasit in functie de nume
     */
    public Stock getStockByName(String name){
        return stockRepository.findByName(name);
    }

    /**
     * Sterge stock-ul in functie de id-ul priit
     * @param id Id-ul pe care il are stock-ul pe care dorim sa il stergem
     */
    public void deleteStock(Long id){

        Stock myStock = getStockById(id);
        if(myStock.getId() != null){
            List<Product> productList = productService.findAllProductsByStock(myStock);

            for(Product product: productList){
                productService.deleteProduct(product.getId());
            }
        }

        stockRepository.deleteById(id);
    }

    /**
     * Modifica stock-ul
     * @param stock Stock-ul modificat, DAR care are id-ul stock-ului pe care dorim sa il modificam
     * @return Stock-ul dupa modificare
     */
    public Stock updateStock(Stock stock){
        Stock existingStock = stockRepository.findById(stock.getId()).orElse(null);
        existingStock.setName(stock.getName());
        existingStock.setQuantity(stock.getQuantity());
        existingStock.setPrice(stock.getPrice());
        existingStock.setAmount(stock.getAmount());
        existingStock.setUnit(stock.getUnit());

        return stockRepository.save(existingStock);
    }

    /**
     * Afiseaza toate stock-urile care au cantitatea mai mica de 10
     * @return Lista de stock-uri cu cantitatea mai mica de 10
     */
    public List<Stock> getLowStock() {
        return stockRepository.findByQuantityLessThan(10);
    }

    /**
     * Afiseaza toate stock-urile in ordine crescatoare in functie de pretul lor
     * @return O lista de stock-uri ordonate dupa pret
     */
    public List<Stock> getSortByPret() {
        return stockRepository.findAllByOrderByPrice();
    }

    /**
     * Afiseaza toate stock-urile ordonate in functie de cantitatea pe care o are
     * @return O lista de stock-uri ordonate dupa pret
     */
    public List<Stock> getSortByQuantity() {
        return stockRepository.findAllByOrderByQuantity();
    }
}
