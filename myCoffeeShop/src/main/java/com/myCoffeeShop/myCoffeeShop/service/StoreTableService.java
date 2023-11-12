package com.myCoffeeShop.myCoffeeShop.service;

import com.myCoffeeShop.myCoffeeShop.entity.Profit;
import com.myCoffeeShop.myCoffeeShop.entity.StoreTable;
import com.myCoffeeShop.myCoffeeShop.repository.StoreTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Clasa care se ocupa cu  implementarea metodelor pentru Clasa Table
 */
@Service
public class StoreTableService {
    @Autowired
    private StoreTableRepository storeTableRepository;

    /**
     * Daca nu exista mese create in aplicatie creem automat 6 mese pentru restaurant
     */
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
            storeTable1.setState(0);
            storeTable1.setProducts_quantiti(null);
            storeTableRepository.save(storeTable1);

            storeTable2.setTableNumber(2);
            storeTable2.setState(0);
            storeTable2.setProducts_quantiti(null);
            storeTableRepository.save(storeTable2);

            storeTable3.setTableNumber(3);
            storeTable3.setState(0);
            storeTable3.setProducts_quantiti(null);
            storeTableRepository.save(storeTable3);

            storeTable4.setTableNumber(4);
            storeTable4.setState(0);
            storeTable4.setProducts_quantiti(null);
            storeTableRepository.save(storeTable4);

            storeTable5.setTableNumber(5);
            storeTable5.setState(0);
            storeTable5.setProducts_quantiti(null);
            storeTableRepository.save(storeTable5);

            storeTable6.setTableNumber(6);
            storeTable6.setState(0);
            storeTable6.setProducts_quantiti(null);
            storeTableRepository.save(storeTable6);
        }
    }

    /**
     * Creem o masa noua
     * @param storeTable Masa pe care dorim sa o creem
     * @return Masa creata
     */
    public StoreTable saveStoreTable(StoreTable storeTable){
        return storeTableRepository.save(storeTable);
    }

    /**
     * Afiseaza toate mesele existente
     * @return Lista cu mesele existente
     */
    public List<StoreTable> getStoreTable() {
        return storeTableRepository.findAll();
    }

    /**
     * Stergem o masa in functie de id-ul sau
     * @param id id-ul mesei pe care dorim sa il stergem
     */
    public void deleteStoreTable(Long id){
        storeTableRepository.deleteById(id);
    }

    /**
     * Modificam caracteristicile unei mese
     * @param storeTable Masa cu caracteristicile dorite si cu id-ul mesei pe care orim sa o modificam
     * @return Masa dupa modificarile dorite
     */
    public StoreTable updateStoreTable(StoreTable storeTable) {
        StoreTable existngStoreTable = storeTableRepository.findById(storeTable.getId()).orElse(null);
        existngStoreTable.setTableNumber(storeTable.getTableNumber());
        existngStoreTable.setState(storeTable.getState());
        existngStoreTable.setCart(storeTable.getCart());
        existngStoreTable.setProducts_quantiti(storeTable.getProducts_quantiti());

        return storeTableRepository.save(existngStoreTable);
    }
}
