package com.myCoffeeShop.myCoffeeShop.repository;

import com.myCoffeeShop.myCoffeeShop.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StockRepository extends JpaRepository<Stock, Long> {
    Stock findByName(String name);
    List<Stock> findByQuantityLessThan(double quantity);
    List<Stock> findAllByOrderByPrice();
    List<Stock> findAllByOrderByQuantity();

}
