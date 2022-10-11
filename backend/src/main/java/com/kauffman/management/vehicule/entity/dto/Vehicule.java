package com.kauffman.management.vehicule.entity.dto;

import com.kauffman.management.numberplate.entity.dto.Numberplate;
import com.kauffman.management.site.entity.dto.Site;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Vehicule {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID vehicule_id;

    @CreationTimestamp
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date created_on;

    @UpdateTimestamp
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date updated_on;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
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

    @OneToOne()
    @JoinColumn(name = "numberplate_id", referencedColumnName = "numberplate_id", nullable = true)
    private Numberplate numberplate;

    @ManyToOne()
    @JoinColumn(name = "site_id")
    private Site site;
}
