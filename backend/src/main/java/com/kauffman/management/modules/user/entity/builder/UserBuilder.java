package com.kauffman.management.modules.user.entity.builder;

import com.kauffman.management.modules.address.entity.dto.Address;
import com.kauffman.management.modules.site.entity.dto.Site;
import com.kauffman.management.modules.status.entity.dto.Status;
import com.kauffman.management.modules.user.entity.dto.User;

import java.util.Date;
import java.util.UUID;

public class UserBuilder {

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
    //private Rank rank;
    //private Credentials credentials;

    public UserBuilder setUserId(UUID user_id) {
        this.user_id = user_id;
        return this;
    }

    public UserBuilder setFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }

    public UserBuilder setLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }

    public UserBuilder setGender(String gender) {
        this.gender = gender;
        return this;
    }

    public UserBuilder setAvatar(String avatar) {
        this.avatar = avatar;
        return this;
    }

    public UserBuilder setDob(Date dob) {
        this.dob = dob;
        return this;
    }

    public UserBuilder setEmail(String email) {
        this.email = email;
        return this;
    }

    public UserBuilder setPhonePro(String phone_pro) {
        this.phone_pro = phone_pro;
        return this;
    }

    public UserBuilder setPhonePerso(String phone_perso) {
        this.phone_perso = phone_perso;
        return this;
    }

    public UserBuilder setNationality(String nationality) {
        this.nationality = nationality;
        return this;
    }

    public UserBuilder setNumirn(String numirn) {
        this.numirn = numirn;
        return this;
    }

    public UserBuilder setDriverLicense(String driver_license) {
        this.driver_license = driver_license;
        return this;
    }

    public UserBuilder setCreatedOn(Date created_on) {
        this.created_on = created_on;
        return this;
    }

    public UserBuilder setUpdatedOn(Date updated_on) {
        this.updated_on = updated_on;
        return this;
    }

    public UserBuilder setPob(String pob) {
        this.pob = pob;
        return this;
    }

    public UserBuilder setActive(Boolean active) {
        this.active = active;
        return this;
    }

    public UserBuilder setSite(Site site) {
        this.site = site;
        return this;
    }

    public UserBuilder setAddress(Address address) {
        this.address = address;
        return this;
    }

    public UserBuilder setStatus(Status status) {
        this.status = status;
        return this;
    }
/*
    public UserBuilder setRank(Rank rank) {
        this.rank = rank;
        return this;
    }

    public UserBuilder setCredentials(Credentials credentials) {
        this.credentials = credentials;
        return this;
    }
*/
    public User build() {
        return new User(user_id, firstname, lastname, gender, avatar, dob, email, phone_pro, phone_perso, nationality, numirn, driver_license, updated_on, created_on, pob, active, site, address, status/*, rank, credentials*/);
    }

}
