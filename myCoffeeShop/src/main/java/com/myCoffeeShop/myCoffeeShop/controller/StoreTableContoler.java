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

    @PostMapping("/initStoreTable")
    public void initStoreTable() {
        storeTableService.initializeStoreTable();
    }

    @PostMapping("/addStoreTable")
    public StoreTable addStoreTable(@RequestBody StoreTable storeTable) {
        return storeTableService.saveStoreTable(storeTable);
    }

    @GetMapping("/StoreTables")
    public List<StoreTable> findAllStoreTable() {
        return storeTableService.getStoreTable();
    }

    @PutMapping("/StoreTable/update")
    public StoreTable updateStoreTable(@RequestBody StoreTable storeTable){
        return storeTableService.updateStoreTable(storeTable);
    }

    @DeleteMapping("/StoreTable/delete/{id}")
    public void deleteStoreTable(@PathVariable Long id) {
        storeTableService.deleteStoreTable(id);
    }
}
