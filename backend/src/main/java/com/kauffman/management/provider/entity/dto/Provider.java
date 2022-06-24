package com.kauffman.management.provider.entity.dto;

import com.kauffman.management.address.entity.dto.Address;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.UUID;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data

public class Provider {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(columnDefinition = "BINARY(16)", nullable = false)
    private UUID provider_id;
    private String name;
    private String phone;
    private String email;
    private String service;
    private Boolean active;

    @OneToOne()
    @JoinColumn(name = "address_id")
    private Address address;

}
