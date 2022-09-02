package com.kauffman.management.intervtech.controller;

import com.kauffman.management.common.entity.ApiResponse;
import com.kauffman.management.ctrltech.entity.dto.Ctrltech;
import com.kauffman.management.intervtech.entity.builder.IntervtechBuilder;
import com.kauffman.management.intervtech.entity.dto.Intervtech;
import com.kauffman.management.intervtech.entity.payload.IntervtechCreatePayload;
import com.kauffman.management.intervtech.entity.payload.IntervtechUpdatePayload;
import com.kauffman.management.intervtech.repository.IntervtechRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/intervtech")

public class IntervtechController {

    @Autowired
    IntervtechRepository intervtechRepository;

    @PostMapping("/create")
    public ApiResponse create(@RequestBody IntervtechCreatePayload payload) {
        Intervtech intervtech = new IntervtechBuilder()
                .setStart_date(payload.getStart_date())
                .setEnd_date(payload.getEnd_date())
                .setDescription(payload.getDescription())
                .setVehicule(payload.getVehicule())
                .setProvider(payload.getProvider())
                .setPrice(payload.getPrice())
                .build();
        return new ApiResponse(true, intervtechRepository.save(intervtech), "api.site.create.success");
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, intervtechRepository.findAll(), null);
    }

    // Read all records by vehicule id
    @GetMapping("/findByVehiculeId/{vid}")
    public ApiResponse findByVehiculeId(@PathVariable("vid") UUID vid) {
        List<Intervtech> fromDb = intervtechRepository.findByVehiculeId(vid);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.address.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.address.detail.success");
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Intervtech fromDb = intervtechRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.intervtech.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.intervtech.detail.success");
    }

    // Update record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody IntervtechUpdatePayload payload) {
        Intervtech fromDb = intervtechRepository.findById(payload.getIntervtech_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.intervtech.update.not-found");
        }
        fromDb.setStart_date(payload.getStart_date());
        fromDb.setEnd_date(payload.getEnd_date());
        fromDb.setDescription(payload.getDescription());
        fromDb.setVehicule(payload.getVehicule());
        fromDb.setProvider(payload.getProvider());
        fromDb.setPrice(payload.getPrice());
        return new ApiResponse(true, intervtechRepository.save(fromDb), "api.intervtech.update.success");
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        Intervtech fromDb = intervtechRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.intervtech.delete.not-found");
        }
        intervtechRepository.deleteById(fromDb.getIntervtech_id());
        return new ApiResponse(true, null, "api.intervtech.delete.success");
    }
}
