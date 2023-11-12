package com.myCoffeeShop.myCoffeeShop.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Clasa Table cu toate campurile definite
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class StoreTable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;

    private int tableNumber;

    private int state;

    @ManyToMany
    private List<Product> cart;

    @ElementCollection
    private List<Double> products_quantiti ;
}
