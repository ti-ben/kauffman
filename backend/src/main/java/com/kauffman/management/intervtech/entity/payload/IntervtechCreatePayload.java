package com.kauffman.management.intervtech.entity.payload;

import com.kauffman.management.vehicule.entity.dto.Vehicule;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class IntervtechCreatePayload {
    private Date start_date;
    private Date end_date;
    private String description;

    private Vehicule vehicule;
}
