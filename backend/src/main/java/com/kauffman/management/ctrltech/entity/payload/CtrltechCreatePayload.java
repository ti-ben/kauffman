package com.kauffman.management.ctrltech.entity.payload;

import com.kauffman.management.vehicule.entity.dto.Vehicule;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CtrltechCreatePayload {
    private Date start_date;
    private Date end_date;
    private String description;
    private String price;

    private Vehicule vehicule;
}