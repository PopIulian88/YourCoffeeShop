package com.myCoffeeShop.myCoffeeShop.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TESTcontrler {
    @RequestMapping("/test")
    public String welcome(){
        return "Mare aplicatie";
    }
}
