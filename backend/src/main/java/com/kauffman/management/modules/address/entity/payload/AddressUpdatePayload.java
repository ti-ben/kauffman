package com.kauffman.management.modules.address.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressUpdatePayload {
    private UUID address_id;
    private String road;
    private String postal_code;
    private String town;
    private String country;
    private String num;
}
