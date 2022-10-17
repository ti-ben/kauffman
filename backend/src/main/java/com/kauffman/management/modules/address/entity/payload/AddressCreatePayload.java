package com.kauffman.management.modules.address.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressCreatePayload {
    String road;
    String postal_code;
    String town;
    String country;
    String num;
}
