package com.kauffman.management.vehicule.entity.payload;

import com.kfm.management.modules.numberplate.entity.dto.Numberplate;
import com.kfm.management.modules.site.entity.dto.Site;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class VehiculeCreatePayload {
    private Date created_on;
    private Date updated_on;
    private Date date_of_purchase;
    private String price;
    private String num_chassis;
    private String brand;
    private String cde_carrosserie;
    private String genre;
    private String mom;
    private String mma;
    private String mmat;
    private String mta;
    private String classe_enviro;
    private String nbr_km;
    private String metrology;
    private String avatar;
    private String fuel;
    private String type;
    private Boolean active;
    private String bought_by;

    private Numberplate numberplate;
    private Site site;
}
