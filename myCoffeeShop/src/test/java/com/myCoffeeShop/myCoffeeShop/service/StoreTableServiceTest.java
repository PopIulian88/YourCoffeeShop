package com.myCoffeeShop.myCoffeeShop.service;

import com.myCoffeeShop.myCoffeeShop.entity.StoreTable;
import com.myCoffeeShop.myCoffeeShop.repository.StoreTableRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class StoreTableServiceTest {

    @Mock
    private StoreTableRepository storeTableRepository;

    @InjectMocks
    private StoreTableService storeTableService;

    @Test
    void initializeStoreTable() {
        // Simulează comportamentul metodei findAll a repository-ului pentru a returna o listă goală
        Mockito.when(storeTableRepository.findAll()).thenReturn(Collections.emptyList());

        // Apelul metodei initializeStoreTable din serviciu
        storeTableService.initializeStoreTable();

        // Verifică că metoda findAll a fost apelată o singură dată
        Mockito.verify(storeTableRepository, Mockito.times(1)).findAll();

        // Verifică că metoda save a fost apelată de 6 ori cu obiecte StoreTable corecte
        Mockito.verify(storeTableRepository, Mockito.times(6)).save(Mockito.any(StoreTable.class));
    }

    @Test
    void saveStoreTable() {
        // Obiectul StoreTable simulat
        StoreTable mockStoreTable = new StoreTable();

        // Simulează comportamentul metodei save a repository-ului pentru a returna obiectul simulat
        Mockito.when(storeTableRepository.save(Mockito.any(StoreTable.class))).thenReturn(mockStoreTable);

        // Apelul metodei saveStoreTable din serviciu
        StoreTable savedStoreTable = storeTableService.saveStoreTable(mockStoreTable);

        // Verifică că metoda save a fost apelată o singură dată cu obiectul corect
        Mockito.verify(storeTableRepository, Mockito.times(1)).save(Mockito.any(StoreTable.class));

        // Verifică dacă obiectul returnat de serviciu este același cu cel simulat
        Assertions.assertEquals(mockStoreTable, savedStoreTable);
    }

    @Test
    void getStoreTable() {
        // Lista simulată de obiecte StoreTable
        List<StoreTable> mockStoreTableList = Arrays.asList(
                new StoreTable(), new StoreTable(), new StoreTable());

        // Simulează comportamentul metodei findAll a repository-ului pentru a returna lista simulată
        Mockito.when(storeTableRepository.findAll()).thenReturn(mockStoreTableList);

        // Apelul metodei getStoreTable din serviciu
        List<StoreTable> retrievedStoreTableList = storeTableService.getStoreTable();

        // Verifică că metoda findAll a fost apelată o singură dată
        Mockito.verify(storeTableRepository, Mockito.times(1)).findAll();

        // Verifică dacă lista de obiecte StoreTable returnată de serviciu este aceeași cu cea simulată
        Assertions.assertEquals(mockStoreTableList, retrievedStoreTableList);
    }

    @Test
    void deleteStoreTable() {
        // Id-ul simulat pentru obiectul StoreTable
        Long storeTableId = 1L;

        // Apelul metodei deleteStoreTable din serviciu
        storeTableService.deleteStoreTable(storeTableId);

        // Verifică că metoda deleteById a fost apelată o singură dată cu id-ul corect
        Mockito.verify(storeTableRepository, Mockito.times(1)).deleteById(storeTableId);
    }

    @Test
    void updateStoreTable() {

    }
}