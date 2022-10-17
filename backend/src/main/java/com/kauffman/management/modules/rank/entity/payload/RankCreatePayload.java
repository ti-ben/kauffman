package com.kauffman.management.modules.rank.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class RankCreatePayload {
    private String name;
    private String description;
    private Boolean active;
}
