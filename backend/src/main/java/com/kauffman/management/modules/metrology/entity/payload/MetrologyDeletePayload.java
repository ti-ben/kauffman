package com.kauffman.management.modules.metrology.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class MetrologyDeletePayload {
    private UUID metrology_id;
}
