package com.kauffman.management.adr.entity.payload;

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

public class AdrUpdatePayload {
    private UUID adr_id;
    private Date date_rdv;
    private String category;
    private String description;

    private User user;
    private Vehicule vehicule;
}
