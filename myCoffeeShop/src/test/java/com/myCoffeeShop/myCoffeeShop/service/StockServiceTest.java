package com.myCoffeeShop.myCoffeeShop.service;

import com.myCoffeeShop.myCoffeeShop.entity.Product;
import com.myCoffeeShop.myCoffeeShop.entity.Stock;
import com.myCoffeeShop.myCoffeeShop.repository.StockRepository;
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
class StockServiceTest {

    @Mock
    private StockRepository stockRepository;

    @Mock
    private ProductService productService;

    @InjectMocks
    private StockService stockService;

    @Test
    void saveStock() {
        // Obiect Stock simulat
        Stock mockStock = new Stock();

        // Simulează comportamentul metodei save a repository-ului pentru a returna stock-ul simulat
        Mockito.when(stockRepository.save(Mockito.any(Stock.class))).thenReturn(mockStock);

        // Salvează stock-ul folosind metoda din serviciu
        Stock savedStock = stockService.saveStock(mockStock);

        // Verifică că metoda save a fost apelată cu stock-ul corect
        Mockito.verify(stockRepository, Mockito.times(1)).save(Mockito.any(Stock.class));

        // Verifică dacă stock-ul returnat de serviciu este același cu cel simulat
        Assertions.assertEquals(mockStock, savedStock);
    }

    @Test
    void saveStocks() {
        List<Stock> mockStocks = Arrays.asList(new Stock(), new Stock());

        // Simulează comportamentul metodei saveAll a repository-ului pentru a returna lista simulată de stock-uri
        Mockito.when(stockRepository.saveAll(Mockito.anyIterable())).thenReturn(mockStocks);

        // Salvează lista de stock-uri folosind metoda din serviciu
        List<Stock> savedStocks = stockService.saveStocks(mockStocks);

        // Verifică că metoda saveAll a fost apelată cu lista de stock-uri corectă
        Mockito.verify(stockRepository, Mockito.times(1)).saveAll(Mockito.anyIterable());

        // Verifică dacă lista de stock-uri returnată de serviciu este aceeași cu cea simulată
        Assertions.assertEquals(mockStocks, savedStocks);
    }

    @Test
    void getStocks() {
        // Lista de obiecte Stock simulate
        List<Stock> mockStocks = Arrays.asList(new Stock(), new Stock());

        // Simulează comportamentul metodei findAll a repository-ului pentru a returna lista simulată de stock-uri
        Mockito.when(stockRepository.findAll()).thenReturn(mockStocks);

        // Obține lista de stock-uri folosind metoda din serviciu
        List<Stock> retrievedStocks = stockService.getStocks();

        // Verifică că metoda findAll a fost apelată
        Mockito.verify(stockRepository, Mockito.times(1)).findAll();

        // Verifică dacă lista de stock-uri returnată de serviciu este aceeași cu cea simulată
        Assertions.assertEquals(mockStocks, retrievedStocks);
    }

    @Test
    void getStockById() {
        // ID-ul de stock simulat
        Long stockId = 1L;

        // Obiect Stock simulat
        Stock mockStock = new Stock();
        mockStock.setId(stockId);

        // Simulează comportamentul metodei findById a repository-ului pentru a returna stock-ul simulat
        Mockito.when(stockRepository.findById(stockId)).thenReturn(Optional.of(mockStock));

        // Obține stock-ul folosind metoda din serviciu
        Stock retrievedStock = stockService.getStockById(stockId);

        // Verifică că metoda findById a fost apelată cu ID-ul corect
        Mockito.verify(stockRepository, Mockito.times(1)).findById(stockId);

        // Verifică dacă stock-ul returnat de serviciu este același cu cel simulat
        Assertions.assertEquals(mockStock, retrievedStock);
    }

    @Test
    void getStockByName() {
        // Numele de stock simulat
        String stockName = "Milk";

        // Obiect Stock simulat
        Stock mockStock = new Stock();

        // Simulează comportamentul metodei findByName a repository-ului pentru a returna stock-ul simulat
        Mockito.when(stockRepository.findByName(stockName)).thenReturn(mockStock);

        // Obține stock-ul folosind metoda din serviciu
        Stock retrievedStock = stockService.getStockByName(stockName);

        // Verifică că metoda findByName a fost apelată cu numele corect
        Mockito.verify(stockRepository, Mockito.times(1)).findByName(stockName);

        // Verifică dacă stock-ul returnat de serviciu este același cu cel simulat
        Assertions.assertEquals(mockStock, retrievedStock);
    }

    @Test
    void deleteStock() {
    }

    @Test
    void updateStock() {
        // Stock simulat
        Stock mockStock = new Stock(1L, "Milk", 10, 2.5, 25.0, "liters");

        // Simulează comportamentul metodei findById a repository-ului pentru a returna stock-ul simulat
        Mockito.when(stockRepository.findById(mockStock.getId())).thenReturn(Optional.of(mockStock));

        // Simulează comportamentul metodei save a repository-ului pentru a returna stock-ul actualizat
        Mockito.when(stockRepository.save(Mockito.any(Stock.class))).thenReturn(mockStock);

        // Apelul metodei updateStock din serviciu
        Stock updatedStock = stockService.updateStock(mockStock);

        // Verifică că metoda findById a fost apelată cu id-ul corect
        Mockito.verify(stockRepository, Mockito.times(1)).findById(mockStock.getId());

        // Verifică că metoda save a fost apelată cu stock-ul corect
        Mockito.verify(stockRepository, Mockito.times(1)).save(Mockito.any(Stock.class));

        // Verifică dacă stock-ul returnat de serviciu este același cu cel simulat
        Assertions.assertEquals(mockStock, updatedStock);
    }

    @Test
    void getLowStock() {
        // Lista simulată de stocuri cu cantități mici
        List<Stock> mockLowStockList = Arrays.asList(new Stock(), new Stock());

        // Simulează comportamentul metodei findByQuantityLessThan a repository-ului pentru a returna lista simulată
        Mockito.when(stockRepository.findByQuantityLessThan(10)).thenReturn(mockLowStockList);

        // Apelul metodei getLowStock din serviciu
        List<Stock> retrievedLowStockList = stockService.getLowStock();

        // Verifică că metoda findByQuantityLessThan a fost apelată o singură dată
        Mockito.verify(stockRepository, Mockito.times(1)).findByQuantityLessThan(10);

        // Verifică dacă lista de stocuri cu cantități mici returnată de serviciu este aceeași cu cea simulată
        Assertions.assertEquals(mockLowStockList, retrievedLowStockList);
    }

    @Test
    void getSortByPret() {
        // Lista simulată de stocuri sortate după preț
        List<Stock> mockSortedStockList = Arrays.asList(new Stock(), new Stock(), new Stock());

        // Simulează comportamentul metodei findAllByOrderByPrice a repository-ului pentru a returna lista simulată
        Mockito.when(stockRepository.findAllByOrderByPrice()).thenReturn(mockSortedStockList);

        // Apelul metodei getSortByPret din serviciu
        List<Stock> retrievedSortedStockList = stockService.getSortByPret();

        // Verifică că metoda findAllByOrderByPrice a fost apelată o singură dată
        Mockito.verify(stockRepository, Mockito.times(1)).findAllByOrderByPrice();

        // Verifică dacă lista de stocuri sortate după preț returnată de serviciu este aceeași cu cea simulată
        Assertions.assertEquals(mockSortedStockList, retrievedSortedStockList);
    }

    @Test
    void getSortByQuantity() {
        // Lista simulată de stocuri sortate după cantitate
        List<Stock> mockSortedStockList = Arrays.asList(new Stock(), new Stock(), new Stock());

        // Simulează comportamentul metodei findAllByOrderByQuantity a repository-ului pentru a returna lista simulată
        Mockito.when(stockRepository.findAllByOrderByQuantity()).thenReturn(mockSortedStockList);

        // Apelul metodei getSortByQuantity din serviciu
        List<Stock> retrievedSortedStockList = stockService.getSortByQuantity();

        // Verifică că metoda findAllByOrderByQuantity a fost apelată o singură dată
        Mockito.verify(stockRepository, Mockito.times(1)).findAllByOrderByQuantity();

        // Verifică dacă lista de stocuri sortate după cantitate returnată de serviciu este aceeași cu cea simulată
        Assertions.assertEquals(mockSortedStockList, retrievedSortedStockList);
    }
}