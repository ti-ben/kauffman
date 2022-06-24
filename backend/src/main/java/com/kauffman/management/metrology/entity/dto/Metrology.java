package com.kauffman.management.metrology.entity.dto;

import com.kauffman.management.vehicule.entity.dto.Vehicule;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Metrology {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID metrology_id;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date start_date;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date end_date;
    private String price;
    private String description;

    @OneToOne
    @JoinColumn(name = "vehicule_id")
    private Vehicule vehicule;
}
