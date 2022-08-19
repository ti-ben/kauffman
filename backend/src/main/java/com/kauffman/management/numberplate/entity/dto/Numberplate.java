package com.kauffman.management.numberplate.entity.dto;

import com.kauffman.management.site.entity.dto.Site;
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

public class Numberplate {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID numberplate_id;
    private String num_plate;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date dop;
    private Boolean active;

    //@ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.ALL}) ALL provide an Error Code 500 in Postman, the solution is to remove the decorator or ad MERGE instead of ALL for cascade type.
    //It doesn't solve the issue when data are passed from backend (Form) to backend.
    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.MERGE})
    @JoinColumn(name = "site_id", referencedColumnName = "site_id")
    private Site site;
}
