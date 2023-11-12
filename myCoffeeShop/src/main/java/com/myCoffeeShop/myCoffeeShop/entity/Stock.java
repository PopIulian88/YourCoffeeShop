package com.myCoffeeShop.myCoffeeShop.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Clasa Stock cu toate campurile definite
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Stock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;

    private String name;
    private double quantity;
    private double price;
    private double amount;
    private String unit;
}
