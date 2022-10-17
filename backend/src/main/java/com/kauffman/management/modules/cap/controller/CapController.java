package com.kauffman.management.modules.cap.controller;

import com.kauffman.management.modules.cap.entity.builder.CapBuilder;
import com.kauffman.management.modules.cap.entity.dto.Cap;
import com.kauffman.management.modules.cap.entity.payload.CapCreatePayload;
import com.kauffman.management.modules.cap.entity.payload.CapUpdatePayload;
import com.kauffman.management.modules.cap.repository.CapRepository;
import com.kauffman.management.modules.entity.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/cap")

public class CapController {

    @Autowired
    CapRepository capRepository;

    @PostMapping("/create")
    public ApiResponse create(@RequestBody CapCreatePayload payload) {
        Cap cap = new CapBuilder()
                .setStart_date(payload.getStart_date())
                .setEnd_date(payload.getEnd_date())
                .setTheme(payload.getTheme())
                .setDescription(payload.getDescription())
                .setPrice(payload.getPrice())
                .setUser(payload.getUser())
                .setVehicule(payload.getVehicule())
                .build();
        return new ApiResponse(true, capRepository.save(cap), "api.cap.create.success");
    }

    // Read all cap records without any distinction
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, capRepository.findAll(), null);
    }

    // Read all cap records by user id
    @GetMapping("/findByUserId/{id}")
    public ApiResponse get(@PathVariable("id") UUID id){
        return new ApiResponse(true, capRepository.findByUserId(id), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Cap fromDb = capRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.cap.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.cap.detail.success");
    }

    // Update record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody CapUpdatePayload payload) {
        Cap fromDb = capRepository.findById(payload.getCap_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.cap.update.not-found");
        }
        fromDb.setStart_date(payload.getStart_date());
        fromDb.setEnd_date(payload.getEnd_date());
        fromDb.setTheme(payload.getTheme());
        fromDb.setDescription(payload.getDescription());
        fromDb.setPrice(payload.getPrice());
        fromDb.setUser(payload.getUser());
        fromDb.setVehicule(payload.getVehicule());
        return new ApiResponse(true, capRepository.save(fromDb), "api.cap.update.success");
    }

    // Delete selected Cap record
    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        Cap fromDb = capRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.cap.delete.not-found");
        }
        capRepository.deleteById(fromDb.getCap_id());
        return new ApiResponse(true, null, "api.cap.delete.success");
    }
}
