package com.myCoffeeShop.myCoffeeShop.service;

import com.myCoffeeShop.myCoffeeShop.entity.Profit;
import com.myCoffeeShop.myCoffeeShop.repository.ProfitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Clasa care se ocupa cu  implementarea metodelor pentru Clasa Profit
 */
@Service
public class ProfitService {
    @Autowired
    private ProfitRepository profitRepository;

    /**
     * Deoarece aplicatia nu are mai multe profile, daca nu exista un profit creat, creaza el unul
     * @param profit Un profit pre-facut cu date nule
     */
    public void initializeProfit(Profit profit){

        List<Profit> myProfile = profitRepository.findAll();

        if(myProfile.size() == 0){
            profitRepository.save(profit);
        }
    }

    /**
     * Creaza un profit nou
     * @param profit Profitul care trebuie creat
     * @return Profitul creat
     */
    public Profit saveProfit(Profit profit){
        return profitRepository.save(profit);
    }

    /**
     * Afiseaza toate profiturile existente
     * @return Toate profiturile existente
     */
    public List<Profit> getProfit() {
        return profitRepository.findAll();
    }

    /**
     * Sterge profitul in fuctie de id
     * @param id Id-ul profitului pe care dorim sa il stergem
     */
    public void deleteProfit(Long id){
        profitRepository.deleteById(id);
    }

    /**
     * Modifica un profit deja existent
     * @param profit Profitul cu parametrii pe care dormi sa ii aiba, DAR id-ul trebuie sa fie identic cu cel pe care dorim sa il modificam
     * @return Profitul dupa modificare
     */
    public Profit updateProfit(Profit profit) {
        Profit existngProfit = profitRepository.findById(profit.getId()).orElse(null);
        existngProfit.setCurentProfit(profit.getCurentProfit());
        existngProfit.setHistoric(profit.getHistoric());

        return profitRepository.save(existngProfit);
    }
}
