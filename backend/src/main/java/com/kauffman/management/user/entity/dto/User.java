package com.kauffman.management.user.entity.dto;

import com.kauffman.management.address.entity.dto.Address;
import com.kauffman.management.credentials.entity.dto.Credentials;
import com.kauffman.management.rank.entity.dto.Rank;
import com.kauffman.management.site.entity.dto.Site;
import com.kauffman.management.status.entity.dto.Status;
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

    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST})
    @JoinColumn(name = "site_id")
    private Site site;

    @OneToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST})
    @JoinColumn(name = "address_id")
    private Address address;

    @ManyToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST})
    @JoinColumn(name = "status_id")
    private Status status;

    @OneToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST})
    @JoinColumn(name = "rank_id")
    private Rank rank;

    @OneToOne(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST})
    @JoinColumn(name = "credentials_id")
    private Credentials credentials;
}
