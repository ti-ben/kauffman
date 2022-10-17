package com.kauffman.management.modules.site.entity.payload;

import com.kauffman.management.modules.address.entity.dto.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class SiteCreatePayload {
    private String name;
    private String description;
    private Date created_on;
    private Boolean active;

    private Address address;
}
