package com.myCoffeeShop.myCoffeeShop.controller;

import com.myCoffeeShop.myCoffeeShop.entity.StoreTable;
import com.myCoffeeShop.myCoffeeShop.service.StoreTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Clasa unde se implementeaza metodele si rutele pentru clasa Table
 */
@RestController
public class StoreTableContoler {

    @Autowired
    private StoreTableService storeTableService;

    /**
     * Endpoint-ul pentru initializarea meselor
     */
    @PostMapping("/initStoreTable")
    public void initStoreTable() {
        storeTableService.initializeStoreTable();
    }

    /**
     * Endpoint-ul pentru functia de adaugare a unei noi mese
     * @param storeTable Un obiect de tip table cu proprietatile dorite
     * @return Masa creat
     */
    @PostMapping("/addStoreTable")
    public StoreTable addStoreTable(@RequestBody StoreTable storeTable) {
        return storeTableService.saveStoreTable(storeTable);
    }

    /**
     * Endpoint-ul catre functai de afisare a tuturor Meselor
     * @return O lista cu toate mesele existente
     */
    @GetMapping("/StoreTables")
    public List<StoreTable> findAllStoreTable() {
        return storeTableService.getStoreTable();
    }

    /**
     * Endpoint-ul catre functia care modifica o masa dorit
     * @param storeTable Masa cu acelasi id cu masa pe care dorim sa o modificam si cu modificarile dorite
     * @return Masa dupa modificarile dorite
     */
    @PutMapping("/StoreTable/update")
    public StoreTable updateStoreTable(@RequestBody StoreTable storeTable){
        return storeTableService.updateStoreTable(storeTable);
    }

    /**
     * Endpoint-ul pentru a sterge o masa in functie de id-ul sau
     * @param id id-ul mesei pe care dorim sa o stergem
     */
    @DeleteMapping("/StoreTable/delete/{id}")
    public void deleteStoreTable(@PathVariable Long id) {
        storeTableService.deleteStoreTable(id);
    }
}
