package com.myCoffeeShop.myCoffeeShop.service;

import com.myCoffeeShop.myCoffeeShop.entity.Profit;
import com.myCoffeeShop.myCoffeeShop.repository.ProfitRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;

import java.sql.Array;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class ProfitServiceTest {

    @Mock
    private ProfitRepository profitRepository;
    @InjectMocks
    private ProfitService profitService;


    @Test
    void saveProfit() {
        Profit profit = new Profit();

        // Simulați comportamentul repository-ului
        Mockito.when(profitRepository.save(Mockito.any(Profit.class))).thenReturn(profit);
        Profit savedProfit = profitService.saveProfit(profit);
        // Verificați că metoda de salvare a fost apelată
        Mockito.verify(profitRepository, Mockito.times(1)).save(Mockito.any(Profit.class));

        Assertions.assertEquals(profit, savedProfit);
    }

    @Test
    void getProfit() {
        List<Profit> profits = Arrays.asList(new Profit(), new Profit(), new Profit());

        // Simulați comportamentul repository-ului
        Mockito.when(profitRepository.findAll()).thenReturn(profits);
        List<Profit> retrievedProfits = profitService.getProfit();
        Mockito.verify(profitRepository, Mockito.times(1)).findAll();

        Assertions.assertEquals(profits, retrievedProfits);
    }

    @Test
    void deleteProfit() {
        Long profitIdToDelete = 5L;

        // Apelați metoda din serviciu pentru ștergere
        profitService.deleteProfit(profitIdToDelete);

        // Verificați că metoda deleteById a repository-ului a fost apelată cu id-ul corect
        Mockito.verify(profitRepository, Mockito.times(1)).deleteById(profitIdToDelete);
    }

    @Test
    void updateProfit() {
        // Creați un obiect Profit pentru test
        Profit updatedProfit = new Profit();
        updatedProfit.setId(2L); // Id-ul trebuie să fie setat pentru a căuta profitul existent
        updatedProfit.setCurentProfit(1000); // Setați atributele obiectului Profit după nevoie
        updatedProfit.setHistoric(new ArrayList<>());

        // Simulați comportamentul repository-ului
        Profit existingProfit = new Profit();

        Mockito.when(profitRepository.findById(updatedProfit.getId())).thenReturn(Optional.of(existingProfit));
        Mockito.when(profitRepository.save(existingProfit)).thenReturn(existingProfit);

        // Apelați metoda din serviciu
        Profit updatedProfitResult = profitService.updateProfit(updatedProfit);

        // Verificați că metoda findById a fost apelată cu id-ul corect
        Mockito.verify(profitRepository, Mockito.times(1)).findById(updatedProfit.getId());

        // Verificați că atributele obiectului Profit existent au fost actualizate corect
        Assertions.assertEquals(updatedProfit.getCurentProfit(), existingProfit.getCurentProfit());
        Assertions.assertEquals(updatedProfit.getHistoric(), existingProfit.getHistoric());

        // Verificați că metoda save a repository-ului a fost apelată
        Mockito.verify(profitRepository, Mockito.times(1)).save(existingProfit);

        // Verificați că rezultatul întors de serviciu este același cu obiectul simulat în repo
        Assertions.assertEquals(existingProfit, updatedProfitResult);
    }
}