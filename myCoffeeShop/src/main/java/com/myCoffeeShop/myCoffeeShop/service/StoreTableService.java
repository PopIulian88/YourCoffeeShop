package com.myCoffeeShop.myCoffeeShop.service;

import com.myCoffeeShop.myCoffeeShop.entity.Profit;
import com.myCoffeeShop.myCoffeeShop.entity.StoreTable;
import com.myCoffeeShop.myCoffeeShop.repository.StoreTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StoreTableService {
    @Autowired
    private StoreTableRepository storeTableRepository;

    public void initializeStoreTable(){

        List<StoreTable> myStoreTables = storeTableRepository.findAll();

        if(myStoreTables.size() == 0){
            StoreTable storeTable1 = new StoreTable();
            StoreTable storeTable2 = new StoreTable();
            StoreTable storeTable3 = new StoreTable();
            StoreTable storeTable4 = new StoreTable();
            StoreTable storeTable5 = new StoreTable();
            StoreTable storeTable6 = new StoreTable();


            storeTable1.setTableNumber(1);
            storeTable1.setState(1);
            storeTableRepository.save(storeTable1);

            storeTable2.setTableNumber(2);
            storeTable2.setState(1);
            storeTableRepository.save(storeTable2);

            storeTable3.setTableNumber(3);
            storeTable3.setState(1);
            storeTableRepository.save(storeTable3);

            storeTable4.setTableNumber(4);
            storeTable4.setState(1);
            storeTableRepository.save(storeTable4);

            storeTable5.setTableNumber(5);
            storeTable5.setState(1);
            storeTableRepository.save(storeTable5);

            storeTable6.setTableNumber(6);
            storeTable6.setState(1);
            storeTableRepository.save(storeTable6);
        }
    }

    public StoreTable saveStoreTable(StoreTable storeTable){
        return storeTableRepository.save(storeTable);
    }

    public List<StoreTable> getStoreTable() {
        return storeTableRepository.findAll();
    }

    public void deleteStoreTable(Long id){
        storeTableRepository.deleteById(id);
    }

    public StoreTable updateStoreTable(StoreTable storeTable) {
        StoreTable existngStoreTable = storeTableRepository.findById(storeTable.getId()).orElse(null);
        existngStoreTable.setTableNumber(storeTable.getTableNumber());
        existngStoreTable.setState(storeTable.getState());
        existngStoreTable.setCart(storeTable.getCart());


        return storeTableRepository.save(existngStoreTable);
    }
}
