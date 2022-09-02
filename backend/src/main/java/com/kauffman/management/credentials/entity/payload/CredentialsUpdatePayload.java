package com.kauffman.management.credentials.entity.payload;

import com.kauffman.management.rank.entity.dto.Rank;
import com.kauffman.management.user.entity.dto.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CredentialsUpdatePayload {
    private UUID credentials_id;
    private String username;
    private String password;
    private Date created_on;
    private Date updated_on;
    private Boolean active;

    private Rank rank;
    private User user;
}
