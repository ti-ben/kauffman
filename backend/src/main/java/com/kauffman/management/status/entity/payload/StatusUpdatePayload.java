package com.kauffman.management.status.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class StatusUpdatePayload {
    private UUID status_id;
    private String name;
    private String description;
    private Boolean active;
}
