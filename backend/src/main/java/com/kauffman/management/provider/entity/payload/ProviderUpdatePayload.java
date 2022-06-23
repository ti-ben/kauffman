package com.kauffman.management.provider.entity.payload;

import com.kfm.management.modules.address.entity.dto.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ProviderUpdatePayload {
    private UUID provider_id;
    private String name;
    private String phone;
    private String email;
    private String service;
    private Boolean active;

    private Address address;
}
