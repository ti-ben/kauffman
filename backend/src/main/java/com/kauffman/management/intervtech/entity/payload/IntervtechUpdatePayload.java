package com.kauffman.management.intervtech.entity.payload;

import com.kauffman.management.provider.entity.dto.Provider;
import com.kauffman.management.vehicule.entity.dto.Vehicule;
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

    private Vehicule vehicule;
    private Provider provider;
}
