package com.kauffman.management.credential.entity.payload;

import com.kauffman.management.rank.entity.dto.Rank;
import com.kauffman.management.user.entity.dto.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

public class CredentialCreatePayload {
    private String username;
    private String password;
    private Date created_on;
    private Date updated_on;
    private Boolean active;

    private User user;
    private Rank rank;
}
