package com.kauffman.management.modules.user.entity.dto;

import com.kauffman.management.modules.address.entity.dto.Address;
import com.kauffman.management.modules.site.entity.dto.Site;
import com.kauffman.management.modules.status.entity.dto.Status;
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

public class User {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)")
    private UUID user_id;
    private String firstname;
    private String lastname;
    private String gender;
    private String avatar;

    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date dob;

    @Column(unique = true)
    private String email;
    private String phone_pro;
    private String phone_perso;
    private String nationality;

    @Column(unique = true)
    private String numirn;
    private String driver_license;

    @CreationTimestamp
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date created_on;

    @UpdateTimestamp
    @DateTimeFormat(pattern = "dd/MM/yyyy")
    private Date updated_on;
    private String pob;
    private Boolean active;

    @ManyToOne()
    @JoinColumn(name = "site_id", referencedColumnName = "site_id")
    private Site site;

    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.ALL})
    @JoinColumn(name = "address_id", referencedColumnName = "address_id")
    private Address address;

    @ManyToOne()
    @JoinColumn(name = "status_id", referencedColumnName = "status_id", nullable = true)
    private Status status;

}