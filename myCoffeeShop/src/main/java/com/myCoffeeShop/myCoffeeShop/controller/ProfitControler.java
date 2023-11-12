package com.myCoffeeShop.myCoffeeShop.controller;

import com.myCoffeeShop.myCoffeeShop.entity.Profit;
import com.myCoffeeShop.myCoffeeShop.service.ProfitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Clasa unde se implementeaza metodele si rutele pentru clasa Profit
 */
@RestController
public class ProfitControler {

    @Autowired
    private ProfitService profitService;

    @PostMapping("/initProfile")
    public void initProfile(@RequestBody Profit profit) {
        profitService.initializeProfit(profit);
    }

    @PostMapping("/addProfit")
    public Profit addProfit(@RequestBody Profit profit) {
        return profitService.saveProfit(profit);
    }

    @GetMapping("/profits")
    public List<Profit> findAllProfits() {
        return profitService.getProfit();
    }

    @PutMapping("/profit/update")
    public Profit updateProfit(@RequestBody Profit profit){
        return profitService.updateProfit(profit);
    }

    @DeleteMapping("/profit/delete/{id}")
    public void deleteProfite(@PathVariable Long id) {
        profitService.deleteProfit(id);
    }
}
