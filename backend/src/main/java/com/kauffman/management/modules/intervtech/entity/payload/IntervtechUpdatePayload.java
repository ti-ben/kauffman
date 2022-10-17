package com.kauffman.management.modules.intervtech.entity.payload;

import com.kauffman.management.modules.provider.entity.dto.Provider;
import com.kauffman.management.modules.vehicule.entity.dto.Vehicule;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class IntervtechUpdatePayload {
    private UUID intervtech_id;
    private Date start_date;
    private Date end_date;
    private String description;
    private String price;

    private Vehicule vehicule;
    private Provider provider;
}
