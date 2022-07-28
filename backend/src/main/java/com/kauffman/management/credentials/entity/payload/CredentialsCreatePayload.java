package com.kauffman.management.credentials.entity.payload;

import com.kauffman.management.rank.entity.dto.Rank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CredentialsCreatePayload {
    private String username;
    private String password;
    private Date created_on;
    private Date updated_on;
    private Boolean active;
    private Rank rank;
}
