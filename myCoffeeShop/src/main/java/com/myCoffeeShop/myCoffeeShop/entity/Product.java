package com.myCoffeeShop.myCoffeeShop.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Clasa Product cu toate campurile definite
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;

    private String name;

    private String description;

    private double price;

    @ManyToMany
    private List<Stock> incredients;

    @ElementCollection
    private List<Double> incredients_quantiti ;

    private String photoLink;
}
