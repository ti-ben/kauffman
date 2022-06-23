package com.kauffman.management.credential.controller;

import com.kauffman.management.common.entity.ApiResponse;
import com.kauffman.management.credential.entity.builder.CredentialBuilder;
import com.kauffman.management.credential.entity.dto.Credential;
import com.kauffman.management.credential.entity.payload.CredentialCreatePayload;
import com.kauffman.management.credential.entity.payload.CredentialUpdatePayload;
import com.kauffman.management.credential.repository.CredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/credential")

public class CredentialController {
    @Autowired
    CredentialRepository credentialRepository;

    @PostMapping("/create")
    public ApiResponse create(@RequestBody CredentialCreatePayload payload) {
        Credential credential = new CredentialBuilder()
                .setUsername(payload.getUsername())
                .setPassword(payload.getPassword())
                .setCreated_on(payload.getCreated_on())
                .setUpdated_on(payload.getUpdated_on())
                .setActive(payload.getActive())
                .setUser(payload.getUser())
                .setRank(payload.getRank())
                .build();
        return new ApiResponse(true, credentialRepository.save(credential), "api.credential.create.success");
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, credentialRepository.findAll(), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Credential fromDb = credentialRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.credential.detail.not-found");
        }
        return new ApiResponse(true, fromDb, null);
    }

    // Update record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody CredentialUpdatePayload payload) {
        Credential fromDb = credentialRepository.findById(payload.getCredential_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.credential.update.not-found");
        }
        fromDb.setUsername(payload.getUsername());
        fromDb.setPassword(payload.getPassword());
        fromDb.setCreated_on(payload.getCreated_on());
        fromDb.setUpdated_on(payload.getUpdated_on());
        fromDb.setActive(payload.getActive());
        fromDb.setUser(payload.getUser());
        fromDb.setRank(payload.getRank());
        return new ApiResponse(true, credentialRepository.save(fromDb), "api.credential.update.success");
    }

    // Archive record
    @PutMapping("/archive")
    public ApiResponse archive(@RequestBody CredentialUpdatePayload payload) {
        Credential fromDb = credentialRepository.findById(payload.getCredential_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.credential.archive.not-found");
        }
        fromDb.setActive(payload.getActive());
        return new ApiResponse(true, credentialRepository.save(fromDb), "api.credential.archive.success");
    }

    @PutMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        Credential fromDb = credentialRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.user.delete.not-found");
        }
        credentialRepository.deleteById(fromDb.getCredential_id());
        return new ApiResponse(true, null, "api.credential.delete.success");
    }
}
