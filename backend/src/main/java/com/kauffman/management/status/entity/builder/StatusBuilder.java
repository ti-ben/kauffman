package com.kauffman.management.status.entity.builder;

import com.kfm.management.modules.status.entity.dto.Status;

import java.util.UUID;

public class StatusBuilder {
    private UUID status_id;
    private String name;
    private String description;
    private Boolean active;

    public StatusBuilder setStatus_id(UUID status_id) {
        this.status_id = status_id;
        return this;
    }

    public StatusBuilder setName(String name) {
        this.name = name;
        return this;
    }

    public StatusBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public StatusBuilder setActive(Boolean active) {
        this.active = active;
        return this;
    }

    public Status build() {
        return new Status(status_id, name, description, active);
    }
}
