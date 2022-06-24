package com.kauffman.management.period.entity.payload;

import com.kauffman.management.user.entity.dto.User;
import com.kauffman.management.vehicule.entity.dto.Vehicule;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class PeriodUpdatePayload {
    private UUID period_id;
    private Date start_date;
    private Date end_date;

    private User user;
    private Vehicule vehicule;

}
