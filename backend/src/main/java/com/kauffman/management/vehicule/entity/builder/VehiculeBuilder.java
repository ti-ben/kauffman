package com.kauffman.management.vehicule.entity.builder;

import com.kfm.management.modules.numberplate.entity.dto.Numberplate;
import com.kfm.management.modules.site.entity.dto.Site;
import com.kfm.management.modules.vehicule.entity.dto.Vehicule;

import java.util.Date;
import java.util.UUID;

public class VehiculeBuilder {
    private UUID vehicule_id;
    private Date created_on;
    private Date updated_on;
    private Date date_of_purchase;
    private String price;
    private String num_chassis;
    private String brand;
    private String cde_carrosserie;
    private String genre;
    private String mom;
    private String mma;
    private String mmat;
    private String mta;
    private String classe_enviro;
    private String nbr_km;
    private String metrology;
    private String avatar;
    private String fuel;
    private String type;
    private Boolean active;
    private String bought_by;

    private Numberplate numberplate;
    private Site site;

    public VehiculeBuilder setVehicule_id(UUID vehicule_id) {
        this.vehicule_id = vehicule_id;
        return this;
    }

    public VehiculeBuilder setCreated_on(Date created_on) {
        this.created_on = created_on;
        return this;
    }

    public VehiculeBuilder setUpdated_on(Date updated_on) {
        this.updated_on = updated_on;
        return this;
    }

    public VehiculeBuilder setDate_of_purchase(Date date_of_purchase) {
        this.date_of_purchase = date_of_purchase;
        return this;
    }

    public VehiculeBuilder setPrice(String price) {
        this.price = price;
        return this;
    }

    public VehiculeBuilder setNum_chassis(String num_chassis) {
        this.num_chassis = num_chassis;
        return this;
    }

    public VehiculeBuilder setBrand(String brand) {
        this.brand = brand;
        return this;
    }

    public VehiculeBuilder setCde_carrosserie(String cde_carrosserie) {
        this.cde_carrosserie = cde_carrosserie;
        return this;
    }

    public VehiculeBuilder setGenre(String genre) {
        this.genre = genre;
        return this;
    }

    public VehiculeBuilder setMom(String mom) {
        this.mom = mom;
        return this;
    }

    public VehiculeBuilder setMma(String mma) {
        this.mma = mma;
        return this;
    }

    public VehiculeBuilder setMmat(String mmat) {
        this.mmat = mmat;
        return this;
    }

    public VehiculeBuilder setMta(String mta) {
        this.mta = mta;
        return this;
    }

    public VehiculeBuilder setClasse_enviro(String classe_enviro) {
        this.classe_enviro = classe_enviro;
        return this;
    }

    public VehiculeBuilder setNbr_km(String nbr_km) {
        this.nbr_km = nbr_km;
        return this;
    }

    public VehiculeBuilder setMetrology(String metrology) {
        this.metrology = metrology;
        return this;
    }

    public VehiculeBuilder setAvatar(String avatar) {
        this.avatar = avatar;
        return this;
    }

    public VehiculeBuilder setFuel(String fuel) {
        this.fuel = fuel;
        return this;
    }

    public VehiculeBuilder setType(String type) {
        this.type = type;
        return this;
    }

    public VehiculeBuilder setActive(Boolean active) {
        this.active = active;
        return this;
    }

    public VehiculeBuilder setBought_by(String bought_by) {
        this.bought_by = bought_by;
        return this;
    }

    public VehiculeBuilder setNumberplate(Numberplate numberplate) {
        this.numberplate = numberplate;
        return this;
    }

    public VehiculeBuilder setSite(Site site) {
        this.site = site;
        return this;
    }

    public Vehicule build() {
        return new Vehicule(vehicule_id, created_on, updated_on, date_of_purchase,
                            price, num_chassis, brand, cde_carrosserie, genre, mom, mma, mmat, classe_enviro,
                            nbr_km, metrology, avatar, avatar, fuel, type, active, bought_by, numberplate, site);
    }
}