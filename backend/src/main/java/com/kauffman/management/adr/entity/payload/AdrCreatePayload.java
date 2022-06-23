package com.kauffman.management.adr.entity.payload;

import com.kauffman.management.user.entity.dto.User;
import com.kauffman.management.vehicule.entity.dto.Vehicule;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class AdrCreatePayload {
    private Date date_rdv;
    private String category;
    private String description;

    private User user;
    private Vehicule vehicule;
}
