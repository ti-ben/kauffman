package com.kauffman.management.provider.controller;

import com.kauffman.management.common.entity.ApiResponse;
import com.kauffman.management.provider.entity.builder.ProviderBuilder;
import com.kauffman.management.provider.entity.dto.Provider;
import com.kauffman.management.provider.entity.payload.ProviderCreatePayload;
import com.kauffman.management.provider.entity.payload.ProviderUpdatePayload;
import com.kauffman.management.provider.repository.ProviderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/provider")

public class ProviderController {

    @Autowired
    ProviderRepository providerRepository;

    @PostMapping("/create")
    public ApiResponse create(@RequestBody ProviderCreatePayload payload) {
        Provider provider = new ProviderBuilder()
                .setName(payload.getName())
                .setEmail(payload.getEmail())
                .setPhone(payload.getPhone())
                .setAddress(payload.getAddress())
                .setService(payload.getService())
                .setActive(payload.getActive())
                .setAddress(payload.getAddress())
                .build();
        return new ApiResponse(true, providerRepository.save(provider), "api.provider.create.success");
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, providerRepository.findAll(), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Provider fromDb = providerRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.provider.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.provider.detail.success");
    }

    // Update record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody ProviderUpdatePayload payload) {
        Provider fromDb = providerRepository.findById(payload.getProvider_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.provider.update.not-found");
        }
        fromDb.setName(payload.getName());
        fromDb.setEmail(payload.getEmail());
        fromDb.setPhone(payload.getPhone());
        fromDb.setAddress(payload.getAddress());
        fromDb.setService(payload.getService());
        fromDb.setActive(payload.getActive());
        fromDb.setAddress(payload.getAddress());
        return new ApiResponse(true, providerRepository.save(fromDb), "api.provider.update.success");
    }

    // Archive record
    @PutMapping("/archive")
    public ApiResponse archive(@RequestBody ProviderUpdatePayload payload) {
        Provider fromDb = providerRepository.findById(payload.getProvider_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.provider.archive.not-found");
        }
        fromDb.setActive(payload.getActive());
        return new ApiResponse(true, providerRepository.save(fromDb), "api.provider.archive.success");
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        Provider fromDb = providerRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.provider.delete.not-found");
        }
        providerRepository.deleteById(fromDb.getProvider_id());
        return new ApiResponse(true, null, "api.provider.delete.success");
    }
}

