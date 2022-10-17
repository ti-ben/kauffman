package com.kauffman.management.modules.metrology.controller;

import com.kauffman.management.modules.entity.ApiResponse;
import com.kauffman.management.modules.metrology.entity.builder.MetrologyBuilder;
import com.kauffman.management.modules.metrology.entity.dto.Metrology;
import com.kauffman.management.modules.metrology.entity.payload.MetrologyCreatePayload;
import com.kauffman.management.modules.metrology.entity.payload.MetrologyUpdatePayload;
import com.kauffman.management.modules.metrology.repository.MetrologyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/metrology")
public class MetrologyController {

    @Autowired
    MetrologyRepository metrologyRepository;

    @PostMapping("/create")
    public ApiResponse create(@RequestBody MetrologyCreatePayload payload) {
        Metrology metrology = new MetrologyBuilder()
                .setStart_date(payload.getStart_date())
                .setEnd_date(payload.getEnd_date())
                .setPrice(payload.getPrice())
                .setDescription(payload.getDescription())
                .setVehicule(payload.getVehicule())
                .setProvider(payload.getProvider())
                .build();
        return new ApiResponse(true, metrologyRepository.save(metrology), "api.metrology.create.success");
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get() {

        return new ApiResponse(true, metrologyRepository.findAll(), null);
    }

    // Read all records by vehicule id
    @GetMapping("/findByVehiculeId/{vid}")
    public ApiResponse findAllById(@PathVariable("vid") UUID vid) {
        List<Metrology> fromDb = metrologyRepository.findByVehiculeId(vid);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.metrology.list.not-found");
        }
        return new ApiResponse(true, fromDb, "api.metrology.list.success");
    }

    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Metrology fromDb = metrologyRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.metrology.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.metrology.detail.success");
    }

    // Update record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody MetrologyUpdatePayload payload) {
        Metrology fromDb = metrologyRepository.findById(payload.getMetrology_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.metrology.update.not-found");
        }
        fromDb.setStart_date(payload.getStart_date());
        fromDb.setEnd_date(payload.getEnd_date());
        fromDb.setPrice(payload.getPrice());
        fromDb.setDescription(payload.getDescription());
        fromDb.setVehicule(payload.getVehicule());
        fromDb.setProvider(payload.getProvider());
        return new ApiResponse(true, metrologyRepository.save(fromDb), "api.metrology.update.success");
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        Metrology fromDb = metrologyRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.metrology.delete.not-found");
        }
        metrologyRepository.deleteById(fromDb.getMetrology_id());
        return new ApiResponse(true, null, "api.metrology.delete.success");
    }
}
