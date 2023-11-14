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

    /**
     * Endpoint-ul pentru initializarea profitului
     */
    @PostMapping("/initProfile")
    public void initProfile(@RequestBody Profit profit) {
        profitService.initializeProfit(profit);
    }

    /**
     * Endpoint-ul pentru functia de adaugare a unui nou profit
     * @param profit Un obiect de tip Profit cu proprietatile dorite
     * @return Profitul creat
     */
    @PostMapping("/addProfit")
    public Profit addProfit(@RequestBody Profit profit) {
        return profitService.saveProfit(profit);
    }

    /**
     * Endpoint-ul catre functai de afisare a tuturor profiturilor
     * @return O lista cu toate profiturile existente
     */
    @GetMapping("/profits")
    public List<Profit> findAllProfits() {
        return profitService.getProfit();
    }

    /**
     * Endpoint-ul catre functia care modifica un porfit dorit
     * @param profit Profitul cu acelasi id cu profitul pe care dorim sa o modificam si cu modificarile dorite
     * @return Profitul dupa modificarile dorite
     */
    @PutMapping("/profit/update")
    public Profit updateProfit(@RequestBody Profit profit){
        return profitService.updateProfit(profit);
    }

    /**
     * Endpoint-ul pentru a sterge un profit in functie de id-ul sau
     * @param id id-ul profitului pe care dorim sa il stergem
     */
    @DeleteMapping("/profit/delete/{id}")
    public void deleteProfite(@PathVariable Long id) {
        profitService.deleteProfit(id);
    }
}
