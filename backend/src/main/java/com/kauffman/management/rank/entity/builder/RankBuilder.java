package com.kauffman.management.rank.entity.builder;

import com.kauffman.management.rank.entity.dto.Rank;

import java.util.UUID;

public class RankBuilder {
    private UUID rank_id;
    private String name;
    private String description;
    private Boolean active;

    public RankBuilder setGrade_id(UUID rank_id) {
        this.rank_id = rank_id;
        return this;
    }

    public RankBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public RankBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public RankBuilder setActive(Boolean active) {
        this.active = active;
        return this;
    }

    public Rank build() {
        return new Rank(rank_id, name, description, active);
    }
}
