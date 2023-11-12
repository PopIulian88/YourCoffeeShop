package com.myCoffeeShop.myCoffeeShop.repository;

import com.myCoffeeShop.myCoffeeShop.entity.Profit;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Interfata pentru clasa Profit pentru a puteam folosi extensia JPA
 */
public interface ProfitRepository extends JpaRepository<Profit, Long> {
}
