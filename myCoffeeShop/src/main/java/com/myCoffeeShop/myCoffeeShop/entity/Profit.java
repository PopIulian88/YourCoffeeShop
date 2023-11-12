package com.myCoffeeShop.myCoffeeShop.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * Clasa Profit cu toate campurile definite
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table
public class Profit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, updatable = false)
    private Long id;

    private double curentProfit;

    @ElementCollection
    private List<Double> historic;
}
