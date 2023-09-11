package com.myCoffeeShop.myCoffeeShop.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class TESTcontrler {
    @RequestMapping("/test")
    @ResponseBody
    public Object getObject() {
        Map<String, Object> object = new HashMap<>();
        object.put("title", "HELLO");
        object.put("description", "Mare Descriere");

        return object;
    }
}
