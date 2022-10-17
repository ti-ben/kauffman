package com.kauffman.management.modules.metrology.entity.payload;

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

public class MetrologyCreatePayload {
    private UUID metrology_id;
    private Date start_date;
    private Date end_date;
    private String price;
    private String description;

    private Vehicule vehicule;
    private Provider provider;
}
