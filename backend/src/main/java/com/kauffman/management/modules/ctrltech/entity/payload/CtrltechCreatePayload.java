package com.kauffman.management.modules.ctrltech.entity.payload;

import com.kauffman.management.modules.provider.entity.dto.Provider;
import com.kauffman.management.modules.vehicule.entity.dto.Vehicule;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CtrltechCreatePayload {
    private Date start_date;
    private Date end_date;
    private String description;
    private String price;

    private Vehicule vehicule;
    private Provider provider;
}