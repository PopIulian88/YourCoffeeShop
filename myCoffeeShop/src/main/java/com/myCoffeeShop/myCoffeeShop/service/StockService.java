package com.myCoffeeShop.myCoffeeShop.service;

import com.myCoffeeShop.myCoffeeShop.entity.Product;
import com.myCoffeeShop.myCoffeeShop.entity.Stock;
import com.myCoffeeShop.myCoffeeShop.repository.StockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StockService {
    @Autowired
    private StockRepository stockRepository;

    @Autowired
    private ProductService productService;

    public Stock saveStock(Stock stock) {
        return stockRepository.save(stock);
    }

    public List<Stock> saveStocks(List<Stock> stocks) {
        return stockRepository.saveAll(stocks);
    }

    public List<Stock> getStocks() {
        return stockRepository.findAll();
    }

    public Stock getStockById(Long id){
        return stockRepository.findById(id).orElse(null);
    }

    public Stock getStockByName(String name){
        return stockRepository.findByName(name);
    }

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

    public Stock updateStock(Stock stock){
        Stock existingStock = stockRepository.findById(stock.getId()).orElse(null);
        existingStock.setName(stock.getName());
        existingStock.setQuantity(stock.getQuantity());
        existingStock.setPrice(stock.getPrice());
        existingStock.setAmount(stock.getAmount());
        existingStock.setUnit(stock.getUnit());

        return stockRepository.save(existingStock);
    }

    public List<Stock> getLowStock() {
        return stockRepository.findByQuantityLessThan(10);
    }

    public List<Stock> getSortByPret() {
        return stockRepository.findAllByOrderByPrice();
    }

    public List<Stock> getSortByQuantity() {
        return stockRepository.findAllByOrderByQuantity();
    }
}
