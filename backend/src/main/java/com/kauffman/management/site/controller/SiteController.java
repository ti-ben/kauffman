package com.kauffman.management.site.controller;

import com.kauffman.management.common.entity.ApiResponse;
import com.kauffman.management.site.entity.builder.SiteBuilder;
import com.kauffman.management.site.entity.dto.Site;
import com.kauffman.management.site.entity.payload.SiteCreatePayload;
import com.kauffman.management.site.entity.payload.SiteUpdatePayload;
import com.kauffman.management.site.repository.SiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

//@CrossOrigin(origins = "*", maxAge = 3600)
@CrossOrigin(origins= {"*"}, maxAge = 4800, allowCredentials = "false" )
@RestController
@RequestMapping("/site")

public class SiteController {

    @Autowired
    SiteRepository siteRepository;

    @PostMapping("/create")
    public ApiResponse create(@RequestBody SiteCreatePayload payload) {
        Site site = new SiteBuilder()
                .setName(payload.getName())
                .setDescription(payload.getDescription())
                .setCreatedOn(payload.getCreated_on())
                .setActive(payload.getActive())
                .build();
        return new ApiResponse(true, siteRepository.save(site), "api.site.create.success");
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get() {
        return new ApiResponse(true, siteRepository.findAll(), "api.site.list.success");
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Site fromDb = siteRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.site.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.site.detail.success");
    }

    // Update record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody SiteUpdatePayload payload) {
        Site fromDb = siteRepository.findById(payload.getSite_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.site.update.not-found");
        }
        fromDb.setName(payload.getName());
        fromDb.setDescription(payload.getDescription());
        fromDb.setCreated_on(payload.getCreated_on());
        fromDb.setActive(payload.getActive());
        return new ApiResponse(true, siteRepository.save(fromDb), "api.site.update.success");
    }

    // Archive record
    @PutMapping("/archive")
    public ApiResponse archive(@RequestBody SiteUpdatePayload payload) {
        Site fromDb = siteRepository.findById(payload.getSite_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.site.archive.not-found");
        }
        fromDb.setActive(payload.getActive());
        return new ApiResponse(true, siteRepository.save(fromDb), "api.site.archive.success");
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id) {
        Site fromDb = siteRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.site.delete.not-found");
        }
        siteRepository.deleteById(fromDb.getSite_id());
        return new ApiResponse(true, null, "api.site.delete.success");
    }
}
