package com.kauffman.management.intervtech.entity.dto;

import com.kfm.management.modules.vehicule.entity.dto.Vehicule;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Intervtech {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID intervtech_id;
    private Date start_date;
    private Date end_date;
    private String description;

    @ManyToOne
    @JoinColumn(name = "vehicule_id")
    private Vehicule vehicule;
}