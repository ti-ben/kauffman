package com.kauffman.management.tachograph.entity.payload;

import com.kauffman.management.user.entity.dto.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TachographUpdatePayload {
    private UUID tachograph_id;
    private Date start_date;
    private Date end_date;
    private String num_carte;
    private String description;
    private User user;
}
