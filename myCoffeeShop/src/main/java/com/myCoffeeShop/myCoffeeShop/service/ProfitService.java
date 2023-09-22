package com.myCoffeeShop.myCoffeeShop.service;

import com.myCoffeeShop.myCoffeeShop.entity.Profit;
import com.myCoffeeShop.myCoffeeShop.repository.ProfitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProfitService {
    @Autowired
    private ProfitRepository profitRepository;

    public void initializeProfit(Profit profit){

        List<Profit> myProfile = profitRepository.findAll();

        if(myProfile.size() == 0){
            profitRepository.save(profit);
        }
    }

    public Profit saveProfit(Profit profit){
        return profitRepository.save(profit);
    }

    public List<Profit> getProfit() {
        return profitRepository.findAll();
    }

    public void deleteProfit(Long id){
        profitRepository.deleteById(id);
    }

    public Profit updateProfit(Profit profit) {
        Profit existngProfit = profitRepository.findById(profit.getId()).orElse(null);
        existngProfit.setCurentProfit(profit.getCurentProfit());
        existngProfit.setHistoric(profit.getHistoric());

        return profitRepository.save(existngProfit);
    }
}
