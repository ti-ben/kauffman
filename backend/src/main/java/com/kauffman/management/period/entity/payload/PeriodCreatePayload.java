package com.kauffman.management.period.entity.payload;

import com.kfm.management.modules.user.entity.dto.User;
import com.kfm.management.modules.vehicule.entity.dto.Vehicule;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class PeriodCreatePayload {
    private Date start_date;
    private Date end_date;

    private User user;
    private Vehicule vehicule;
}
