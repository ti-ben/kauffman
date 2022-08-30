package com.kauffman.management.cap.entity.payload;

import com.kauffman.management.period.entity.dto.Period;
import com.kauffman.management.user.entity.dto.User;
import com.kauffman.management.vehicule.entity.dto.Vehicule;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CapCreatePayload {
    private Date start_date;
    private Date end_date;
    private String price;
    private String theme;
    private String description;

    private User user;
    private Vehicule vehicule;
}
