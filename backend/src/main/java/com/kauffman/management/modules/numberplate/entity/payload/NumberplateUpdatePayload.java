package com.kauffman.management.modules.numberplate.entity.payload;

import com.kauffman.management.modules.site.entity.dto.Site;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class NumberplateUpdatePayload {
    private UUID numberplate_id;
    private String num_plate;
    private Date dop;
    private Boolean active;
    private Site site;
}
