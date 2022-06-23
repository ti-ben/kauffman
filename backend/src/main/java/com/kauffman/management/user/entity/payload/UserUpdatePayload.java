package com.kauffman.management.user.entity.payload;

import com.kfm.management.modules.site.entity.dto.Site;
import com.kfm.management.modules.status.entity.dto.Status;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.tomcat.jni.Address;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserUpdatePayload {
    private UUID user_id;
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
}
