package com.kauffman.management.modules.provider.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;
@Data
@AllArgsConstructor
@NoArgsConstructor

public class ProviderDeletePayload {
    private UUID provider_id;
}
