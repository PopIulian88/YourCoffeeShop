package com.myCoffeeShop.myCoffeeShop.controller;

import com.myCoffeeShop.myCoffeeShop.entity.Stock;
import com.myCoffeeShop.myCoffeeShop.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Clasa unde se implementeaza metodele si rutele pentru clasa Stock
 */
@RestController
public class StockControler {

    @Autowired
    private StockService stockService;

    @PostMapping("/addStock")
    public Stock addStock(@RequestBody Stock stock){
        return stockService.saveStock(stock);
    }

    @PostMapping("/addStocks")
    public List<Stock> addStocks(@RequestBody List<Stock> stocks){
        return stockService.saveStocks(stocks);
    }

    @GetMapping("/stocks")
    public List<Stock> findAllStocks() {
        return stockService.getStocks();
    }

    @GetMapping("/stockById/{id}")
    public Stock findStockById(@PathVariable Long id) {
        return stockService.getStockById(id);
    }

    @GetMapping("/stockByName/{name}")
    public Stock findStockByName(@PathVariable String name) {
        return stockService.getStockByName(name);
    }

    @PutMapping("/stock/update")
    public Stock updateStock(@RequestBody Stock stock){
        return stockService.updateStock(stock);
    }

    @DeleteMapping("/stock/delete/{id}")
    public void deleteStock(@PathVariable Long id) {
        stockService.deleteStock(id);
    }

    @GetMapping("/lowStock")
    public List<Stock> findLowStock() {
        return stockService.getLowStock();
    }

    @GetMapping("/stock/sortPret")
    public List<Stock> getSortedByPrice() {
        return stockService.getSortByPret();
    }

    @GetMapping("/stock/sortQuantity")
    public List<Stock> getSortedByQuantity() {
        return stockService.getSortByQuantity();
    }
}
