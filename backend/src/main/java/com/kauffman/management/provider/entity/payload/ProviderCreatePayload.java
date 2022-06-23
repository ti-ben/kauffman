package com.kauffman.management.provider.entity.payload;

import com.kfm.management.modules.address.entity.dto.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class ProviderCreatePayload {
    private String name;
    private String phone;
    private String email;
    private String service;
    private Boolean active;

    private Address address;
}
