package com.kauffman.management.tachograph.entity.dto;

import com.kfm.management.modules.user.entity.dto.User;
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

public class Tachograph {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID tachograph_id;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date start_date;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date end_date;
    private String num_carte;
    private String description;

    @ManyToOne()
    @JoinColumn(name = "user_id")
    private User user;
}
