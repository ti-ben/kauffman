package com.kauffman.management.numberplate.entity.builder;

import com.kfm.management.modules.numberplate.entity.dto.Numberplate;
import com.kfm.management.modules.site.entity.dto.Site;

import java.util.Date;
import java.util.UUID;

public class NumberplateBuilder {
    private UUID numberplate_id;
    private String num_plate;
    private Date dop;
    private Boolean active;

    private Site site;

    public NumberplateBuilder setNumberplate_id(UUID numberplate_id) {
        this.numberplate_id = numberplate_id;
        return this;
    }

    public NumberplateBuilder setNum_plate(String num_plate) {
        this.num_plate = num_plate;
        return this;
    }

    public NumberplateBuilder setDop(Date dop) {
        this.dop = dop;
        return this;
    }

    public NumberplateBuilder setActive(Boolean active) {
        this.active = active;
        return this;
    }

    public NumberplateBuilder setSite(Site site) {
        this.site = site;
        return this;
    }

    public Numberplate build() {
        return new Numberplate(numberplate_id, num_plate, dop, active, site);
    }
}
