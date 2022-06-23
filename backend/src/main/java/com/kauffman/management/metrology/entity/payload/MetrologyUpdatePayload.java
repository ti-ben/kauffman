package com.kauffman.management.metrology.entity.payload;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class MetrologyUpdatePayload {
    private UUID metrology_id;
    private Date start_date;
    private Date end_date;
    private String price;
    private String description;
}
