package com.kauffman.management.modules.user.entity.payload;

import com.kauffman.management.modules.address.entity.dto.Address;
import com.kauffman.management.modules.site.entity.dto.Site;
import com.kauffman.management.modules.status.entity.dto.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCreatePayload {
    private String firstname;
    private String lastname;
    private String gender;
    private String avatar;
    private Date dob;
    private String email;
    private String phone_pro;
    private String phone_perso;
    private String nationality;
    private String numirn;
    private String driver_license;
    private Date created_on;
    private Date updated_on;
    private String pob;
    private Boolean active;

    private Site site;
    private Address address;
    private Status status;
    //private Rank rank;
    //private Credentials credentials;
}
