package com.kauffman.management.modules.selectmed.entity.payload;

import com.kauffman.management.modules.user.entity.dto.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class SelectmedCreatePayload {
    private Date start_date;
    private Date end_date;
    private String price;
    private String description;

    private User user;
    //private Period period;
}
