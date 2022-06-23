package com.kauffman.management.rank.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class RankUpdatePayload {
    private UUID rank_id;
    private String name;
    private String description;
    private Boolean active;
}
