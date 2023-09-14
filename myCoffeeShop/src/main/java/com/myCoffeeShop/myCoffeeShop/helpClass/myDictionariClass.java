package com.myCoffeeShop.myCoffeeShop.helpClass;

public class myDictionariClass {

    private Long id;
    private double cantiti;

    public myDictionariClass() {
        this.id = null;
        this.cantiti = 0;
    }
    public myDictionariClass(Long id, double cantiti) {
        this.id = id;
        this.cantiti = cantiti;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getCantiti() {
        return cantiti;
    }

    public void setCantiti(double cantiti) {
        this.cantiti = cantiti;
    }
}
