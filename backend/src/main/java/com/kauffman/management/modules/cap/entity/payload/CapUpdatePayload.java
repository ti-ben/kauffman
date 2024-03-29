package com.kauffman.management.modules.cap.entity.payload;

import com.kauffman.management.modules.user.entity.dto.User;
import com.kauffman.management.modules.vehicule.entity.dto.Vehicule;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CapUpdatePayload {
    private UUID cap_id;
    private Date start_date;
    private Date end_date;
    private String price;
    private String theme;
    private String description;

    private User user;
    private Vehicule vehicule;
}
