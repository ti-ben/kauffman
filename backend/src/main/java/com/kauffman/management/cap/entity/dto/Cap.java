package com.kauffman.management.cap.entity.dto;

import com.kauffman.management.period.entity.dto.Period;
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

public class Cap {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID cap_id;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date start_date;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date end_date;
    private String price;
    private String theme;
    private String description;

    @ManyToOne
    @JoinColumn(name = "period_id")
    private Period period;
}
