package com.kauffman.management.period.controller;

import com.kfm.management.common.entity.ApiResponse;
import com.kfm.management.modules.period.entity.builder.PeriodBuilder;
import com.kfm.management.modules.period.entity.dto.Period;
import com.kfm.management.modules.period.entity.payload.PeriodCreatePayload;
import com.kfm.management.modules.period.entity.payload.PeriodUpdatePayload;
import com.kfm.management.modules.period.repository.PeriodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/period")
public class PeriodController {

    @Autowired
    PeriodRepository periodRepository;

    @PostMapping("/create")
    public ApiResponse create(@RequestBody PeriodCreatePayload payload) {
        Period period = new PeriodBuilder()
                .setStart_date(payload.getStart_date())
                .setEnd_date(payload.getEnd_date())
                .setUser(payload.getUser())
                .setVehicule(payload.getVehicule())
                .build();
        return new ApiResponse(true, periodRepository.save(period), "api.period.create.success");
    }

    // Read all period records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, periodRepository.findAll(), null);
    }

    // Read selected period record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Period fromDb = periodRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.period.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.period.detail.success");
    }

    // Update selected period record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody PeriodUpdatePayload payload) {
        Period fromDb = periodRepository.findById(payload.getPeriod_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.period.update.not-found");
        }
        fromDb.setStart_date(payload.getStart_date());
        fromDb.setEnd_date(payload.getEnd_date());
        fromDb.setUser(payload.getUser());
        fromDb.setVehicule(payload.getVehicule());
        return new ApiResponse(true, periodRepository.save(fromDb), "api.period.update.success");
    }

    // Delete select period record
    @PutMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        Period fromDb = periodRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.period.delete.not-found");
        }
        periodRepository.deleteById(fromDb.getPeriod_id());
        return new ApiResponse(true, null, "api.period.delete.success");
    }
}
