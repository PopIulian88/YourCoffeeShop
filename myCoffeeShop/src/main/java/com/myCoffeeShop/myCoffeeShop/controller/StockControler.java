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

    /**
     * Endpoint-ul pentru functia de adaugare a unui nou stock
     * @param stock Un obiect de tip Stock cu proprietatile dorite
     * @return Stock-ul creat
     */
    @PostMapping("/addStock")
    public Stock addStock(@RequestBody Stock stock){
        return stockService.saveStock(stock);
    }


    /**
     * Endpoint-ul pentru functia de adaugare a mai multor stockuri
     * @param stocks O lista de obiecte de tip Stock cu proprietatile dorite
     * @return  O lista de obiecte de tip Stock cu proprietatile dorite
     */
    @PostMapping("/addStocks")
    public List<Stock> addStocks(@RequestBody List<Stock> stocks){
        return stockService.saveStocks(stocks);
    }

    /**
     * Endpoint-ul catre functai de afisare a tuturor stockurilor
     * @return O lista cu toate stocurile existente
     */
    @GetMapping("/stocks")
    public List<Stock> findAllStocks() {
        return stockService.getStocks();
    }

    /**
     * Endpoint-ul pentru identificarea unui stock in functie de id
     * @param id id-ul pe care il are stock dorit
     * @return Stockul care are id-ul dorit
     */
    @GetMapping("/stockById/{id}")
    public Stock findStockById(@PathVariable Long id) {
        return stockService.getStockById(id);
    }

    /**
     * Endpoint-ul pentru identificarea unui stock in functie de numele sau
     * @param name numele pe care il are stock-ul pe care il dorim
     * @return Stockul care are numele dorit
     */
    @GetMapping("/stockByName/{name}")
    public Stock findStockByName(@PathVariable String name) {
        return stockService.getStockByName(name);
    }

    /**
     * Endpoint-ul catre functia care modifica un stockul dorit
     * @param stock Stock-ul cu acelasi id cu stockului pe care dorim sa il modificam si cu modificarile dorite
     * @return Stockul dupa modificarile dorite
     */
    @PutMapping("/stock/update")
    public Stock updateStock(@RequestBody Stock stock){
        return stockService.updateStock(stock);
    }

    /**
     * Endpoint-ul pentru a sterge un stock in functie de id-ul sau
     * @param id id-ul stockului pe care dorim sa il stergem
     */
    @DeleteMapping("/stock/delete/{id}")
    public void deleteStock(@PathVariable Long id) {
        stockService.deleteStock(id);
    }

    /**
     * Endpoint-ul pentru functia care intoarce  stockul cu cantitate limitata
     * @return O lista cu stockul cu cantitate limitata
     */
    @GetMapping("/lowStock")
    public List<Stock> findLowStock() {
        return stockService.getLowStock();
    }

    /**
     * Endpoint-ul pentru sortarea stockului in functie de pretul lor
     * @return Lista de stockuri sortate in functie de pret-ul lor
     */
    @GetMapping("/stock/sortPret")
    public List<Stock> getSortedByPrice() {
        return stockService.getSortByPret();
    }

    /**
     * Endpoint-ul pentru sortarea stockului in functie de cantitatea lor
     * @return Lista de stockuri sortate in functie de cantitatea lor
     */
    @GetMapping("/stock/sortQuantity")
    public List<Stock> getSortedByQuantity() {
        return stockService.getSortByQuantity();
    }
}
