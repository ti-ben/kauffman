package com.kauffman.management.rank.controller;

import com.kfm.management.common.entity.ApiResponse;
import com.kfm.management.modules.rank.entity.builder.RankBuilder;
import com.kfm.management.modules.rank.entity.dto.Rank;
import com.kfm.management.modules.rank.entity.payload.RankCreatePayload;
import com.kfm.management.modules.rank.entity.payload.RankUpdatePayload;
import com.kfm.management.modules.rank.repository.RankRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/rank")
public class RankController {

    @Autowired
    RankRepository rankRepository;

    @PostMapping("/create")
    public ApiResponse create(@RequestBody RankCreatePayload payload) {
        Rank rank = new RankBuilder()
                .setName(payload.getName())
                .setDescription(payload.getDescription())
                .setActive(payload.getActive())
                .build();
        return new ApiResponse(true, rankRepository.save(rank), "api.rank.create.success");
    }

    // Read all records
    @GetMapping("/list")
    public ApiResponse get() {

        return new ApiResponse(true, rankRepository.findAll(), null);
    }

    // Read record detail
    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable("id") UUID id) {
        Rank fromDb = rankRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.rank.detail.not-found");
        }
        return new ApiResponse(true, fromDb, "api.rank.detail.success");
    }

    // Update record
    @PutMapping("/update")
    public ApiResponse update(@RequestBody RankUpdatePayload payload) {
        Rank fromDb = rankRepository.findById(payload.getRank_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.rank.update.not-found");
        }
        fromDb.setName(payload.getName());
        fromDb.setDescription(payload.getDescription());
        fromDb.setActive(payload.getActive());
        return new ApiResponse(true, rankRepository.save(fromDb), "api.rank.update.success");
    }

    // Archive record
    @PutMapping("/archive")
    public ApiResponse archive(@RequestBody RankUpdatePayload payload) {
        Rank fromDb = rankRepository.findById(payload.getRank_id()).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.rank.archive.not-found");
        }
        fromDb.setActive(payload.getActive());
        return new ApiResponse(true, rankRepository.save(fromDb), "api.rank.archive.success");
    }

    @PutMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable("id") UUID id)  {
        Rank fromDb = rankRepository.findById(id).orElse(null);
        if (fromDb == null) {
            return new ApiResponse(false, null, "api.rank.delete.not-found");
        }
        rankRepository.deleteById(fromDb.getRank_id());
        return new ApiResponse(true, null, "api.rank.delete.success");
    }
}
