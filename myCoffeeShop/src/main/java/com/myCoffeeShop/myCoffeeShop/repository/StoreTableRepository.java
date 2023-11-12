package com.myCoffeeShop.myCoffeeShop.repository;

import com.myCoffeeShop.myCoffeeShop.entity.StoreTable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Interfata pentru clasa Table pentru a puteam folosi extensia JPA
 */
public interface StoreTableRepository extends JpaRepository<StoreTable, Long> {
}
