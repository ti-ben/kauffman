package com.kauffman.management.modules.numberplate.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class NumberplateDeletePayload {
    private UUID numberplate_id;
}
