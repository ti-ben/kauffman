package com.kauffman.management.adr.controller;

import com.kauffman.management.adr.entity.builder.AdrBuilder;
import com.kauffman.management.adr.entity.dto.Adr;
import com.kauffman.management.adr.entity.payload.AdrCreatePayload;
import com.kauffman.management.adr.entity.payload.AdrUpdatePayload;
import com.kauffman.management.adr.repository.AdrRepository;
import com.kauffman.management.common.entity.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/adr")

public class AdrController {

    @Autowired
    AdrRepository adrRepository;

    // Create new adr record
    @PostMapping("/create")
    public ApiResponse create(@RequestBody AdrCreatePayload payload) {
        Adr adr = new AdrBuilder()
                .setDate_rdv(payload.getDate_rdv())
                .setDescription(payload.getDescription())
                .setCategory(payload.getCategory())
                .setUser(payload.getUser())
                .setVehicule(payload.getVehicule())
                .build();
        return new ApiResponse(true, adrRepository.save(adr), "api.adr.create.success");
    }

    // Read all adr records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, adrRepository.findAll(), null);
    }

    // Read all records by vehicule id
    @GetMapping("/findByVehiculeId/{vid}")
    public ApiResponse findAllById(@PathVariable("vid") UUID vid) {
        List<Adr> fromDb = adrRepository.findByVehiculeId(vid);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.adrListByVehiculeId.not-found");
        }
        return new ApiResponse(true, fromDb, "api.adrListByVehiculeId.success");
    }

    // Read all records by user id
    @GetMapping("/findByUserId/{uid}")
    public ApiResponse findByUserId(@PathVariable("uid") UUID uid) {
        List<Adr> fromDb = adrRepository.findByUserId(uid);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.adrListByVehiculeId.not-found");
        }
        return new ApiResponse(true, fromDb, "api.adrListByVehiculeId.success");
    }

    // Read selected adr record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Adr fromDb = adrRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.adr.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.adr.detail.success");
    }

    // Update selected adr record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody AdrUpdatePayload payload) {
        Adr fromDb = adrRepository.findById(payload.getAdr_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.adr.update.not-found");
        }
        fromDb.setDate_rdv(payload.getDate_rdv());
        fromDb.setDescription(payload.getDescription());
        fromDb.setCategory(payload.getCategory());
        fromDb.setUser(payload.getUser());
        fromDb.setVehicule(payload.getVehicule());
        return new ApiResponse(true, adrRepository.save(fromDb), "api.adr.update.success");
    }

    // Delete selected adr record
    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        Adr fromDb = adrRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.adr.delete.not-found");
        }
        adrRepository.deleteById(fromDb.getAdr_id());
        return new ApiResponse(true, null, "api.adr.delete.success");
    }
}
