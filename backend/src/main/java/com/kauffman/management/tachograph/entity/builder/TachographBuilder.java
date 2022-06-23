package com.kauffman.management.tachograph.entity.builder;

import com.kfm.management.modules.tachograph.entity.dto.Tachograph;
import com.kfm.management.modules.user.entity.dto.User;

import java.util.Date;
import java.util.UUID;

public class TachographBuilder {
    private UUID tachograph_id;
    private Date start_date;
    private Date end_date;
    private String num_carte;
    private String description;
    private User user;

    public TachographBuilder setTachograph_id(UUID tachograph_id) {
        this.tachograph_id = tachograph_id;
        return this;
    }

    public TachographBuilder setStart_date(Date start_date) {
        this.start_date = start_date;
        return this;
    }

    public TachographBuilder setEnd_date(Date end_date) {
        this.end_date = end_date;
        return this;
    }

    public TachographBuilder setNum_carte(String num_carte) {
        this.num_carte = num_carte;
        return this;
    }

    public TachographBuilder setDescription(String description) {
        this.description = description;
        return this;
    }

    public TachographBuilder setUser(User user) {
        this.user = user;
        return this;
    }

    public Tachograph build() {
        return new Tachograph(tachograph_id, start_date, end_date, num_carte, description, user);
    }
}
