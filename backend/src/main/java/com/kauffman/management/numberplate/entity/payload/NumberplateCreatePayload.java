package com.kauffman.management.numberplate.entity.payload;

import com.kauffman.management.site.entity.dto.Site;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class NumberplateCreatePayload {
    private String num_plate;
    private Date dop;
    private Boolean active;
    private Site site;
}
