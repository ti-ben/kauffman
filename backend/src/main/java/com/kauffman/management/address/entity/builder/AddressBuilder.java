package com.kauffman.management.address.entity.builder;


import com.kauffman.management.address.entity.dto.Address;

import java.util.UUID;

public class AddressBuilder {
    UUID address_id;
    String road;
    String postal_code;
    String town;
    String country;
    String num;

    public AddressBuilder setAddress_id(UUID address_id) {
        this.address_id = address_id;
        return this;
    }

    public AddressBuilder setRoad(String road) {
        this.road = road;
        return this;
    }

    public AddressBuilder setPostal_code(String postal_code) {
        this.postal_code = postal_code;
        return this;
    }

    public AddressBuilder setTown(String town) {
        this.town = town;
        return this;
    }

    public AddressBuilder setCountry(String country) {
        this.country = country;
        return this;
    }

    public AddressBuilder setNum(String num) {
        this.num = num;
        return this;
    }

    public Address build() {
        return new Address(address_id, road, postal_code, town, country, num);
    }
}
