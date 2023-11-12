package com.myCoffeeShop.myCoffeeShop.repository;

import com.myCoffeeShop.myCoffeeShop.entity.Product;
import com.myCoffeeShop.myCoffeeShop.entity.Stock;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * Interfata pentru clasa Product pentru a puteam folosi extensia JPA cu implementarile aferente
 */
public interface ProductRepository extends JpaRepository<Product, Long> {
    Product findByName(String name);

    List<Product> findAllByIncredients(Stock stock);
    List<Product> findAllByOrderByPrice();
    List<Product> findAllByOrderByName();

}
