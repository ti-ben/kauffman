package com.kauffman.management.ctrltech.controller;

import com.kauffman.management.common.entity.ApiResponse;
import com.kauffman.management.ctrltech.entity.builder.CtrltechBuilder;
import com.kauffman.management.ctrltech.entity.dto.Ctrltech;
import com.kauffman.management.ctrltech.entity.payload.CtrltechCreatePayload;
import com.kauffman.management.ctrltech.entity.payload.CtrltechUpdatePayload;
import com.kauffman.management.ctrltech.repository.CtrltechRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/ctrltech")

public class CtrltechController {

    @Autowired
    CtrltechRepository ctrltechRepository;

    // Create new ctrltech record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody CtrltechCreatePayload payload) {
        Ctrltech ctrltech = new CtrltechBuilder()
                .setStart_date(payload.getStart_date())
                .setEnd_date(payload.getEnd_date())
                .setPrice(payload.getPrice())
                .setDescription(payload.getDescription())
                .setVehicule(payload.getVehicule())
                .build();
        return new ApiResponse(true, ctrltechRepository.save(ctrltech), "api.ctrltech.create.success");
    }

    // Read all ctrltech records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, ctrltechRepository.findAll(), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Ctrltech fromDb = ctrltechRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.ctrltech.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.ctrltech.detail.success");
    }

    // Update record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody CtrltechUpdatePayload payload) {
        Ctrltech fromDb = ctrltechRepository.findById(payload.getCtrltech_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.site.update.not-found");
        }

        return new ApiResponse(true, ctrltechRepository.save(fromDb), "api.site.update.success");
    }

    @PutMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        Ctrltech fromDb = ctrltechRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.ctrltech.delete.not-found");
        }
        ctrltechRepository.deleteById(fromDb.getCtrltech_id());
        return new ApiResponse(true, null, "api.ctrltech.delete.success");
    }

}
