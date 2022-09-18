package com.kauffman.management.credentials.controller;

import com.kauffman.management.common.entity.ApiResponse;
import com.kauffman.management.credentials.entity.builder.CredentialsBuilder;
import com.kauffman.management.credentials.entity.dto.Credentials;
import com.kauffman.management.credentials.entity.payload.CredentialsCreatePayload;
import com.kauffman.management.credentials.entity.payload.CredentialsUpdatePayload;
import com.kauffman.management.credentials.repository.CredentialsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/credentials")

public class CredentialsController {
    @Autowired
    CredentialsRepository credentialsRepository;

    @PostMapping("/create")
    public ApiResponse create(@RequestBody CredentialsCreatePayload payload) {
        Credentials credential = new CredentialsBuilder()
                .setUsername(payload.getUsername())
                .setPassword(payload.getPassword())
                .setCreated_on(payload.getCreated_on())
                .setUpdated_on(payload.getUpdated_on())
                .setActive(payload.getActive())
                .setRank((payload.getRank()))
                .setUser(payload.getUser())
                .build();
        return new ApiResponse(true, credentialsRepository.save(credential), "api.credentials.create.success");
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, credentialsRepository.findAll(), null);
    }

    // Read credential record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Credentials fromDb = credentialsRepository.findByUserId(id);
        //Credentials fromDb = credentialsRepository.findByUsername(username);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.credentials.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.credentials.detail.found");
    }

    // Update record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody CredentialsUpdatePayload payload) {
        Credentials fromDb = credentialsRepository.findById(payload.getCredentials_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.credentials.update.not-found");
        }
        fromDb.setUsername(payload.getUsername());
        fromDb.setPassword(payload.getPassword());
        fromDb.setCreated_on(payload.getCreated_on());
        fromDb.setUpdated_on(payload.getUpdated_on());
        fromDb.setActive(payload.getActive());
        fromDb.setRank(payload.getRank());
        fromDb.setUser(payload.getUser());
        return new ApiResponse(true, credentialsRepository.save(fromDb), "api.credentials.update.success");
    }

    // Archive record
    @PutMapping("/archive")
    public ApiResponse archive(@RequestBody CredentialsUpdatePayload payload) {
        Credentials fromDb = credentialsRepository.findById(payload.getCredentials_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.credentials.archive.not-found");
        }
        fromDb.setActive(payload.getActive());
        return new ApiResponse(true, credentialsRepository.save(fromDb), "api.credentials.archive.success");
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        Credentials fromDb = credentialsRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.user.delete.not-found");
        }
        credentialsRepository.deleteById(fromDb.getCredentials_id());
        return new ApiResponse(true, null, "api.credentials.delete.success");
    }
}
