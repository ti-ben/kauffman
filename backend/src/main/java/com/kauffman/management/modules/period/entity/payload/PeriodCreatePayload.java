package com.kauffman.management.modules.period.entity.payload;

import com.kauffman.management.modules.user.entity.dto.User;
import com.kauffman.management.modules.vehicule.entity.dto.Vehicule;
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
